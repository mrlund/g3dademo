import {NavController, MenuController} from 'ionic-angular';
import {Component} from '@angular/core';

import {ChannelService} from '../../services/channelService';

@Component({
    templateUrl: 'build/pages/teacher-page/teacher-page.html'
})
export class TeacherPage {
    public suggestions = [];
    public counts = {};
    public processedSuggestions = [];

    constructor(private menu:MenuController, private channelService:ChannelService) {
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
            let minCount = 1;

            for(let i = 0 ; i < self.suggestions.length; i++){
                var text = self.suggestions[i].text;
                self.counts[text] = (self.counts[text] || 0)+1;
                if(self.counts[text] > maxCount) maxCount = self.counts[text];
            }

            var textKeys = Object.keys(self.counts);
            for(let i = 0 ; i < textKeys.length; i++) {
                let currentKey = textKeys[i];
                let curSize = (self.counts[currentKey]/maxCount)*15;
                self.processedSuggestions.push({text: currentKey, weight: curSize >= 9 ? curSize : 9 })
            }
        }

        this.channelService.getConnection().received(function (data) {
            if (data.A && data.A.length > 1) {
                self.suggestions.push({author: data.A[0], text: data.A[1]});
                window.localStorage.setItem('suggestions', JSON.stringify(self.suggestions));
                if(window.$('#jqcloud').length){
                    processNewSuggestions();
                    window.$('#jqcloud').jQCloud('update', self.processedSuggestions);
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
    ngAfterViewInit(){
        window.jQuery('#jqcloud').jQCloud(this.processedSuggestions);
    }

}
