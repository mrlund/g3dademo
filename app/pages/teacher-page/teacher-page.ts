import {NavController, MenuController} from 'ionic-angular';
import {Component} from '@angular/core';
import {ProgressProvider} from '../../providers/progressProvider';
import {ContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';

//import {Http, Response} from "@angular/http";

import {ChannelService} from '../../services/channelService';

@Component({
    templateUrl: 'build/pages/teacher-page/teacher-page.html'
})
export class TeacherPage {
    suggestions:any;

    constructor(private nav:NavController, private progress:ProgressProvider, private menu:MenuController, private channelService:ChannelService) {
        this.suggestions = [];
    }

    ngOnInit() {
        // Create a function that the hub can call to broadcast messages.
        var self = this;
        this.channelService.getConnection().received(function (data) {
            if (data.A.length > 1) self.suggestions.push(data.A[0] + ': ' + data.A[1]);
        })
    }

    toggleMenu() {
        if (this.menu.isOpen()) {
            this.menu.close();
        } else {
            this.menu.open();
        }
    }

    publish() {
        this.channelService.publish();
    }

}
