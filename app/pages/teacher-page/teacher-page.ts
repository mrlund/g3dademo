import {NavController, MenuController} from 'ionic-angular';
import {Component, AfterContentInit} from '@angular/core';

import {ChannelService, SignalrWindow} from '../../services/channelService';

@Component({
    templateUrl: 'build/pages/teacher-page/teacher-page.html'
})
export class TeacherPage implements AfterContentInit{
    public suggestions = [];
    public counts = {};
    public processedSuggestions = [];

    constructor(private menu:MenuController, private channelService:ChannelService, private window:SignalrWindow) {
    }
    ngOnInit() {
        // Create a function that the hub can call to broadcast messages.
        var self = this;
        var earlySuggestions = window.localStorage.getItem('suggestions');
        if(earlySuggestions) self.suggestions = JSON.parse(earlySuggestions);

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
    ngAfterContentInit(){
        let cloudElement = this.window.$('#jqcloud');
        var heightOfCloud = this.window.$('.teacher-page').height() - 100;
        var widthOfCloud = this.window.$('.teacher-page').width();
        cloudElement.height(heightOfCloud);
        cloudElement.width(widthOfCloud);
        cloudElement.jQCloud(this.processedSuggestions, {
            autoResize: true
        });
    }

}
