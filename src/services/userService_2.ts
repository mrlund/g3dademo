import { Injectable } from '@angular/core';
import {ChannelConfig} from "./channelService";


export class User {
  constructor(
    public login: string,
    public password: string) { }
}


@Injectable()
export class UserService2 {
  public baseUrl: string = "https://girlsinc.azurewebsites.net"; // "http://localhost:26209"; //

  getUserData(){
    let userDataString = localStorage.getItem('userData');
    return userDataString ? JSON.parse(userDataString) : {};
  }

  getChannelConfiguration() {
    var userData = this.getUserData();
    let channelConfig = new ChannelConfig();
    channelConfig.url = this.baseUrl + "/signalr";
    channelConfig.hubName = "inClassHub";
    channelConfig.params = new Map<string, string>();
    channelConfig.params['uid'] = userData.UserId;
    channelConfig.params['courseClassId'] = userData.SelectedCourseId;
    return channelConfig;
  }
}
