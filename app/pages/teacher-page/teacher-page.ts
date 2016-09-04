import {MenuController} from 'ionic-angular';
import {Component} from '@angular/core';

import {ChannelService, SignalrWindow} from '../../services/channelService';
import {TeacherPageService} from '../../services/teacherPageService';

@Component({
    templateUrl: 'build/pages/teacher-page/teacher-page.html'
})
export class TeacherPage {
    public suggestions = []; //array of all suggestions
    public processedSuggestions = {}; //object with suggestions sorted by questionId
    public counts = {};
    public charts = [];

    constructor(private menu: MenuController,
        private channelService: ChannelService,
        private teacherPageService: TeacherPageService,
        private window: SignalrWindow) {
    }
    ngOnInit() {
        // Create a function that the hub can call to broadcast messages.
        var self = this;
        var earlySuggestions = window.localStorage.getItem('suggestions');
        var updatedDate = +this.window.localStorage.getItem('suggestionsUpdate');

        if (earlySuggestions && (new Date().getTime() - updatedDate) > 1000 * 60 * 60) {
            self.suggestions = JSON.parse(earlySuggestions);
        } else {
            this.window.localStorage.removeItem("suggestionsUpdate");
        }


        function processNewSuggestions() {
            self.counts = {};
            self.processedSuggestions = {};
            let maxCount = 0;
            let maxSize = 15;

            for (let i = 0; i < self.suggestions.length; i++) {
                let questionId = self.suggestions[i].id;
                self.processedSuggestions[questionId] = [];
            }

            for (let id in self.processedSuggestions) {
                let suggestionsArrayByQuestionId = self.processedSuggestions[id];

                var counts = {};

                for (let i = 0; i < self.suggestions.length; i++) {
                    if (self.suggestions[i].id == id) {
                        var text = self.suggestions[i].text;
                        counts[text] = (counts[text] || 0) + 1;
                        if (counts[text] > maxCount) maxCount = counts[text];
                    }
                }

                var textKeys = Object.keys(counts);
                for (let i = 0; i < textKeys.length; i++) {
                    let currentKey = textKeys[i];
                    let curSize = (counts[currentKey] * maxSize) / maxCount; // max = 15(font-size); current = x(font-size); ... x = current * 15 / max
                    suggestionsArrayByQuestionId.push({ text: currentKey, weight: curSize, id: id })
                }

            }
        }

        let dataObservable = this.channelService.getReceivedData();

        function randomIntFromInterval(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        dataObservable['source'].subscribe((data) => {
            if (data.A[0] == "poll") {
                let existingVote = false;
                let totalVotes = 1;
                let votes;
                for (var i = 0; i < self.charts.length; i++) {
                    if (self.charts[i].id == data.A[1]) {
                        votes = self.charts[i].votes;
                    }
                }
                if (!votes) {
                    self.charts.push({ id: data.A[1], votes: [] });
                    votes = [];
                }
                for (var i = 0; i < votes.length; i++) {
                    totalVotes += votes[i].count;
                }
                let heightPerVote = (1 / totalVotes) * 100;
                for (var i = 0; i < votes.length; i++) {
                    if (votes[i].name == data.A[3]) {
                        votes[i].count++;
                        existingVote = true;
                    }
                    votes[i].height = (heightPerVote * votes[i].count) + "%";
                }
                if (!existingVote) {
                    votes.push({ name: data.A[3], count: 1, height: heightPerVote + "%" });
                }
                setTimeout(() => {
                    let graphs = [];
                    for (var i = 0; i < self.charts.length; i++) {
                        graphs.push(self.charts[i]);
                        if (self.charts[i].id == data.A[1]) {
                            self.charts[i].votes = votes;
                        }
                    }
                    self.charts = graphs;
                }, 100)
            } else if (data.A && data.A.length > 1) {
                self.suggestions.push({ author: data.A[2], text: data.A[3], id: data.A[1] });
                this.window.localStorage.setItem('suggestions', JSON.stringify(self.suggestions));
                this.window.localStorage.setItem('suggestionsUpdate', new Date().getTime().toString());
                if (this.window.$('#jqcloud').length) {
                    processNewSuggestions();
                    let cloudsBlock = this.window.$('#jqcloud'); //.jQCloud('update', self.processedSuggestions);
                    for (let id in this.processedSuggestions) {
                        var currentCloud = this.window.$('#jqcloud-innner-' + id);
                        if (currentCloud.length) {
                            currentCloud.jQCloud('update', this.processedSuggestions[id]);
                        } else {
                            var headerHeight = 44;
                            var heightOfScreen = this.window.$(window).height() - headerHeight;

                            this.window.$(cloudsBlock).append("<div class='inner-jqcloud-block' id='" + "jqcloud-innner-" + id + "'></div>");
                            let cloudElement = this.window.$("#jqcloud-innner-" + id);
                            let newHeight = heightOfScreen / Object.keys(this.processedSuggestions).length;

                            cloudElement.height(newHeight < 300 ? newHeight : 300);
                            let currentCloudData = this.processedSuggestions[id];
                            cloudElement.jQCloud(currentCloudData, {
                                autoResize: true,
                                steps: 3,
                                fontSize: ['60px', '45px', '30px']
                            });
                        }
                    }
                }
            }
        });

        processNewSuggestions();

        setTimeout(() => {
            var headerHeight = 44;
            let cloudElement = this.window.$('#jqcloud');
            var heightOfCloud = this.window.$(window).height() - headerHeight;
            let newHeight = heightOfCloud / Object.keys(this.processedSuggestions).length;

            for (let id in this.processedSuggestions) {
                this.window.$(cloudElement).append("<div class='inner-jqcloud-block' id='" + "jqcloud-innner-" + id + "'></div>");
                let jqcloudEl = this.window.$("#jqcloud-innner-" + id);
                jqcloudEl.height(newHeight < 300 ? newHeight : 300);
                jqcloudEl.jQCloud(this.processedSuggestions[id], {
                    autoResize: true,
                    steps: 3,
                    fontSize: ['60px', '45px', '30px']
                });
            }
        }, 700)
    }
    toggleMenu() {
        if (this.menu.isOpen()) {
            this.menu.close();
        } else {
            this.menu.open();
        }
    }
    deleteSuggestions() {
        this.charts = [];
        this.teacherPageService.clearAssignments();
        this.suggestions = [];
        this.processedSuggestions = [];
        this.window.$('.teacher-page-inner-content .inner-jqcloud-block').jQCloud('update', this.processedSuggestions);
    }

}
