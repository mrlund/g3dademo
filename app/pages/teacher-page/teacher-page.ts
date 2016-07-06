import {NavController, MenuController} from 'ionic-angular';
import {Component} from '@angular/core';

import {ChannelService} from '../../services/channelService';

@Component({
    templateUrl: 'build/pages/teacher-page/teacher-page.html'
})
export class TeacherPage {
    public suggestions = [];

    constructor(private menu:MenuController, private channelService:ChannelService) {
    }
    ngOnInit() {
        // Create a function that the hub can call to broadcast messages.
        var self = this;
        var earlySuggestions = window.localStorage.getItem('suggestions');
        if(earlySuggestions) self.suggestions = JSON.parse(earlySuggestions);
        this.channelService.getConnection().received(function (data) {
            if (data.A.length > 1) self.suggestions.push({author:data.A[0], text: data.A[1]});
            window.localStorage.setItem('suggestions', JSON.stringify(self.suggestions));
        })
    }
    toggleMenu() {
        if (this.menu.isOpen()) {
            this.menu.close();
        } else {
            this.menu.open();
        }
    }
    ngAfterViewInit(){
        jQuery('#jqcloud').jQCloud(this.suggestions);
    }

}
