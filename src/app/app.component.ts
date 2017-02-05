import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {UserService} from '../services/userService';
// import { ROUTER_DIRECTIVES } from '@angular/router'


@Component({
  // directives: [ROUTER_DIRECTIVES],
  template:  "<router-outlet></router-outlet>"
  // template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  //rootPage = TabsPage;
  

  constructor(platform: Platform,  public userService: UserService) {
    if (window.location.hash.indexOf("access_token") > -1 && window.location.hash.length > 20){
      this.userService.saveToken(window.location.hash);
    }
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      //this.userService.goToMain();
    });
  }
}
