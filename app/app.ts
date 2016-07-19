import {ionicBootstrap} from 'ionic-angular';
import {Component, provide} from '@angular/core';

import {HTTP_PROVIDERS} from "@angular/http";

import {ROUTER_DIRECTIVES} from '@angular/router';
import {LocationStrategy, HashLocationStrategy } from '@angular/common';
import {ProgressProvider} from './providers/progressProvider';
import {ContentData} from './providers/contentProvider';

import {ChannelService, ChannelConfig, SignalrWindow} from './services/channelService';
import {UserService} from './services/userService';
import {Globals} from './globals';

import { appRouterProviders } from './routes';

let channelConfig = new ChannelConfig();
channelConfig.url = "http://girlsinc.azurewebsites.net/signalr";
channelConfig.hubName = "inClassHub";

@Component({
    directives: [ROUTER_DIRECTIVES],
    template:  "<router-outlet></router-outlet>"
})
class MyApp {
    constructor(
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
        Globals,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        provide(SignalrWindow, {useValue: window}),
        provide("channel.config", { useValue: channelConfig })
    ], {
        mode: 'ios'
    }
);

