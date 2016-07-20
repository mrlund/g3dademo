import {MenuController} from 'ionic-angular';
import {Component, AfterViewInit} from '@angular/core';

import {ChannelService, SignalrWindow} from '../../services/channelService';
import {TeacherPageService} from '../../services/teacherPageService';

@Component({
    templateUrl: 'build/pages/teacher-page/teacher-page.html'
})
export class TeacherPage implements AfterViewInit{
    public suggestions = [];
    public counts = {};
    public processedSuggestions = [];

    constructor(private menu:MenuController,
                private channelService:ChannelService,
                private teacherPageService:TeacherPageService,
                private window:SignalrWindow) {
    }
    ngOnInit() {
        // Create a function that the hub can call to broadcast messages.
        var self = this;
        var earlySuggestions = window.localStorage.getItem('suggestions');
        var updatedDate = +this.window.localStorage.getItem('suggestionsUpdate');

        if(earlySuggestions && (new Date().getTime() - updatedDate) > 1000*60*60){
            self.suggestions = JSON.parse(earlySuggestions);
        } else {
            this.window.localStorage.removeItem("suggestionsUpdate");
        }
            

        function processNewSuggestions(){
            self.counts = {};
            self.processedSuggestions = [];
            let maxCount = 0;
            let maxSize = 15;

            for(let i = 0 ; i < self.suggestions.length; i++){
                var text = self.suggestions[i].text;
                self.counts[text] = (self.counts[text] || 0)+1;
                if(self.counts[text] > maxCount) maxCount = self.counts[text];
            }

            var textKeys = Object.keys(self.counts);
            for(let i = 0 ; i < textKeys.length; i++) {
                let currentKey = textKeys[i];
                let curSize = (self.counts[currentKey]*maxSize)/maxCount; // max = 15(font-size); current = x(font-size); ... x = current * 15 / max
                self.processedSuggestions.push({text: currentKey, weight: curSize})
            }
        }

        let dataObservable = this.channelService.getReceivedData();
        dataObservable['source'].subscribe((data) => {
            if (data.A && data.A.length > 1) {
                self.suggestions.push({author: data.A[0], text: data.A[1]});
                this.window.localStorage.setItem('suggestions', JSON.stringify(self.suggestions));
                this.window.localStorage.setItem('suggestionsUpdate', new Date().getTime().toString());
                if(this.window.$('#jqcloud').length){
                    processNewSuggestions();
                    this.window.$('#jqcloud').jQCloud('update', self.processedSuggestions);
                }
            }
        });

        processNewSuggestions();
    }
    toggleMenu() {
        if (this.menu.isOpen()) {
            this.menu.close();
        } else {
            this.menu.open();
        }
    }
    deleteSuggestions(){
        this.teacherPageService.clearAssignments();
        this.suggestions = [];
        this.processedSuggestions = [];
        this.window.$('#jqcloud').jQCloud('update', this.processedSuggestions);
    }
    ngAfterViewInit(){
        var headerHeight = 44;
        let cloudElement = this.window.$('#jqcloud');
        var heightOfCloud = this.window.$(window).height() - headerHeight;
        var widthOfCloud = this.window.$(window).width();
        cloudElement.height(heightOfCloud);
        cloudElement.width(widthOfCloud);
        cloudElement.jQCloud(this.processedSuggestions, {
            autoResize: true,
            steps: 3,
            fontSize: ['60px', '45px','30px' ]
        });
    }

}
