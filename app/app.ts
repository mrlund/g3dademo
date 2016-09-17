import {ionicBootstrap} from 'ionic-angular';
import {Component, provide} from '@angular/core';

import {HTTP_PROVIDERS} from "@angular/http";

import {ROUTER_DIRECTIVES} from '@angular/router';
import {LocationStrategy, HashLocationStrategy } from '@angular/common';
import {ProgressProvider} from './providers/progressProvider';
import {ContentData} from './providers/contentProvider';

import {ChannelService, SignalrWindow} from './services/channelService';
import {UserService} from './services/userService';
import {TeacherPageService} from './services/teacherPageService';
import {Globals} from './globals';

import { appRouterProviders } from './routes';
import {ModalService} from "./services/modalService";
import {ApiService} from "./services/apiService";
import {ToastService} from "./services/toastService";

@Component({
    directives: [ROUTER_DIRECTIVES],
    template:  "<router-outlet></router-outlet>"
})
class MyApp {
    constructor(
        private userService: UserService
    ) {
        this.userService.goToMain();
    }
}

ionicBootstrap(MyApp, [
        appRouterProviders,
        HTTP_PROVIDERS,
        ProgressProvider,
        ContentData,
        ChannelService,
        UserService,
        ApiService,
        ToastService,
        TeacherPageService,
        ModalService,
        Globals,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        provide(SignalrWindow, {useValue: window})
    ], {
        mode: 'ios'
    }
);

