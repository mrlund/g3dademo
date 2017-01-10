import {MenuController, ViewController} from 'ionic-angular';
import {Component, ChangeDetectorRef} from '@angular/core';

import {ChannelService, SignalrWindow} from '../../services/channelService';
import {TeacherPageService} from '../../services/teacherPageService';
import {BehaviorSubject} from "rxjs";
import {UserService} from '../../services/userService';

@Component({
    templateUrl: 'teacher-page.html',
    selector: 'teacher-popup'
})
export class TeacherPage {
    public suggestions: Array<any> = []; //array of all suggestions
    public processedSuggestions: any = {}; //object with suggestions sorted by questionId
    public counts:any = {};
    public charts: BehaviorSubject<Array<any>> = new BehaviorSubject<Array<any>>([]);

    constructor(public menu: MenuController,
        public channelService: ChannelService,
        public teacherPageService: TeacherPageService,
        public window: SignalrWindow,
        public cdRef: ChangeDetectorRef,
        public viewCtrl: ViewController,
        public userService: UserService) {
    }
    ngOnInit() {
        // Create a function that the hub can call to broadcast messages.
        var earlySuggestions = window.localStorage.getItem('suggestions');
        var updatedDate = +this.window.localStorage.getItem('suggestionsUpdate');

        if (earlySuggestions && (new Date().getTime() - updatedDate) > 1000 * 60 * 60) {
            this.suggestions = JSON.parse(earlySuggestions);
        } else {
            this.window.localStorage.removeItem("suggestionsUpdate");
        }


        let dataObservable = this.channelService.getReceivedData();

        var currentCharts = this.charts.getValue();
        dataObservable['source'].subscribe((data) => {
            console.log("Received", data);

                if (data.A && data.A[0] == "poll") {
                    let existingVote = false;
                    let totalVotes = 1;
                    let maxVote = 0;
                    let votes;
                    for (var i = 0; i < currentCharts.length; i++) {
                        if (currentCharts[i].id == data.A[1]) {
                            votes = currentCharts[i].votes;
                        }
                    }
                    if (!votes) {
                        currentCharts.push({ id: data.A[1], votes: [] });
                        votes = [];
                    }
                    for (var i = 0; i < votes.length; i++) {
                        totalVotes += votes[i].count;
                        if (maxVote < votes[i].count){
                            maxVote = votes[i].count;
                        }
                    }
                    console.log(maxVote);

                    let heightPerVote = (1 / ++maxVote) * 100;
                    for (var i = 0; i < votes.length; i++) {
                        if (votes[i].name == data.A[7]) {
                            votes[i].count++;
                            existingVote = true;
                        }
                        votes[i].height = (heightPerVote * votes[i].count) + "%";
                    }
                    if (!existingVote) {
                        votes.push({ name: data.A[7], count: 1, height: heightPerVote + "%", title: data.A[6] });
                    }

                    let graphs = [];
                    for (var i = 0; i < currentCharts.length; i++) {
                        graphs.push(currentCharts[i]);
                        if (currentCharts[i].id == data.A[1]) {
                            currentCharts[i].title = data.A[6];
                            currentCharts[i].votes = votes;
                        }
                    }
                    this.charts.next(graphs);
                    this.cdRef.detectChanges();
                } else if (data.A && data.A.length > 1) {
                    this.suggestions.push({ author: data.A[5], text: data.A[7], id: data.A[1], title: data.A[6] });
                    this.window.localStorage.setItem('suggestions', JSON.stringify(this.suggestions));
                    this.window.localStorage.setItem('suggestionsUpdate', new Date().getTime().toString());
                    if (this.window.$('#jqcloud').length) {
                        this.processNewSuggestions();
                        let cloudsBlock = this.window.$('#jqcloud'); //.jQCloud('update', this.processedSuggestions);
                        for (let id in this.processedSuggestions) {
                            var currentCloud = this.window.$('#jqcloud-innner-' + id);
                            if (currentCloud.length) {
                                let suggestionsCount = this.processedSuggestions[id].length;
                                let currentHeight = currentCloud.height();
                                let newHeight =  ( Math.ceil((suggestionsCount ) / 10) * 50 + 200 ); //every 10 suggestions  are increase to 50 px
                                if(newHeight >  currentHeight){
                                    currentCloud.height(newHeight);
                                    let currentCloudData = this.processedSuggestions[id];
                                    currentCloud.jQCloud('destroy');
                                    currentCloud.jQCloud(currentCloudData, {
                                        autoResize: true,
                                        steps: 3,
                                        fontSize: ['50px', '35px', '20px']
                                    });
                                 //   currentCloud.jQCloud('update', this.processedSuggestions[id]);
                                }
                                else {
                                    currentCloud.jQCloud('update', this.processedSuggestions[id]);
                                }
                            } else {
                                var headerHeight = 44;
                                var heightOfScreen = this.window.$(window).height() - headerHeight;

                                this.window.$(cloudsBlock).append("<div><h3>"+ this.processedSuggestions[id].title +"</h3><div class='inner-jqcloud-block' id='" + "jqcloud-innner-" + id + "'></div></div>");
                                let cloudElement = this.window.$("#jqcloud-innner-" + id);
                                let newHeight = heightOfScreen / Object.keys(this.processedSuggestions).length;

                                cloudElement.height(newHeight < 300 ? newHeight : 300);
                                let currentCloudData = this.processedSuggestions[id];
                                cloudElement.jQCloud(currentCloudData, {
                                    autoResize: true,
                                    steps: 3,
                                    fontSize: ['50px', '35px', '20px']
                                });
                            }
                        }
                    }
                }
            });

        this.processNewSuggestions();

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
                    fontSize: ['50px', '35px', '20px'],
                    removeOverflowing: false
                });
            }
        }, 700)
    }
    refreshData(){
        let userData = this.userService.getUserData();
        let classId = userData.SelectedCourseId;
        this.channelService.getConnection().proxies.inclasshub.invoke('getRecentMessages', 1);
    }
    toggleMenu() {
        if (this.menu.isOpen()) {
            this.menu.close();
        } else {
            this.menu.open();
        }
    }
    deleteSuggestions() {
        this.charts.next([]);
        this.teacherPageService.clearAssignments();
        this.suggestions = [];
        this.processedSuggestions = [];
        this.window.$('.teacher-page-inner-content .inner-jqcloud-block').jQCloud('update', this.processedSuggestions);
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
    processNewSuggestions(){
        this.counts = {};
        this.processedSuggestions = {};
        let maxCount = 0;
        let maxSize = 25;

        for (let i = 0; i < this.suggestions.length; i++) {
            let questionId = this.suggestions[i].id;
            this.processedSuggestions[questionId] = [];
        }

        for (let id in this.processedSuggestions) {
            let suggestionsArrayByQuestionId = this.processedSuggestions[id];

            var counts = {};

            for (let i = 0; i < this.suggestions.length; i++) {
                if (this.suggestions[i].id == id) {
                    this.processedSuggestions[id].title = this.suggestions[i].title;
                    var text = this.suggestions[i].text;
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
}
