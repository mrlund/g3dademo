import {App, Platform, MenuController, ionicBootstrap} from 'ionic-angular';
import {Component, OnInit, provide} from '@angular/core';

import {HTTP_PROVIDERS} from "@angular/http";

import {ROUTER_DIRECTIVES} from '@angular/router';
import {ProgressProvider} from './providers/progressProvider';
import {ContentData} from './providers/contentProvider';

import {ChannelService, ChannelConfig, SignalrWindow} from './services/channelService';
import {UserService} from './services/userService';

import { appRouterProviders } from './routes';

import {Events} from 'ionic-angular';

let channelConfig = new ChannelConfig();
channelConfig.url = "http://girlsinc.azurewebsites.net/signalr";
channelConfig.hubName = "inClassHub";

@Component({
    directives: [ROUTER_DIRECTIVES],
    template:  `
            <router-outlet></router-outlet>
        `
})
class MyApp {
    constructor(
        private app: App,
        private platform: Platform,
        private menu: MenuController,
        private progress: ProgressProvider,
        private events: Events,
        private content: ContentData,
        private channelService: ChannelService,
        private userService: UserService
    ) {
        this.userService.checkCredentials();
    }
}

ionicBootstrap(MyApp, [
        appRouterProviders,
        HTTP_PROVIDERS,
        ProgressProvider,
        ContentData,
        ChannelService,
        UserService,
        provide(SignalrWindow, {useValue: window}),
        provide("channel.config", { useValue: channelConfig })
    ], {
        mode: 'ios'
    }
);

