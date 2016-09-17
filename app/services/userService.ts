import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers} from '@angular/http';
import {Globals} from "../globals";
import {ChannelConfig} from "./channelService";


export class User {
    constructor(
        public login: string,
        public password: string) { }
}

@Injectable()
export class UserService {

    constructor(private router: Router,
                private http: Http,
                private _globals: Globals){
        this.checkIfLoggedInFlag();
    }

    logout():void{
        localStorage.removeItem("api_token");
        localStorage.removeItem("userData");
        localStorage.removeItem("api_token_expiry");
        this._globals.isLoggedIn.next(false);
        this.router.navigate(['/login']);
    }

    singUp(newUserData: any) {
        this.http.post('https://girlsinc.azurewebsites.net' + '/api/account/register', newUserData).subscribe(res => {
            this.router.navigate(['/login']);
        });
    }

    newLogin(user) {
        let creds = "username=" + user.login + "&password=" + user.password + "&grant_type=password";
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('https://girlsinc.azurewebsites.net' + '/token', creds, {headers: headers}).subscribe(res => {
            let parsedRes = res.json();
            let token = parsedRes['access_token'];
            localStorage.setItem("api_token", token);
            let expiry = new Date().getTime() + (parsedRes['expires_in'] * 1000) - 300;
            localStorage.setItem("api_token_expiry", expiry.toString());
            this._globals.isLoggedIn.next(true);
            let headers = new Headers();
            headers.append('Authorization', 'Bearer ' + token);
            //get data of userprofile
            this.http.get('https://girlsinc.azurewebsites.net' + '/api/account/userprofile', {headers: headers}).subscribe(res => {
                let parsedRes = res.json();
                localStorage.setItem("userData", JSON.stringify(parsedRes));
                this.router.navigate(['/main']);
            });
        });
    }
    checkIfLoggedInFlag():void{
        let token = localStorage.getItem("api_token");
        let tokenExpiryTime = new Date(parseInt(localStorage.getItem("api_token_expiry")));
        if(token && new Date() < tokenExpiryTime){
            this._globals.isLoggedIn.next(true);
        } else {
            localStorage.removeItem("api_token");
            localStorage.removeItem("api_token_expiry");
            localStorage.removeItem("userData");
        }
    }
    goToMain():void{
        this.router.navigate(['/main']);
    }
    goToLogin():void{
        this.router.navigate(['/login']);
    }
    goToForgetPasswordPage():void{
        this.router.navigate(['/forget-password']);
    }
    resetPassword():void{
        this.router.navigate(['/login']);
    }
    getUserData(){
        let userDataString = localStorage.getItem('userData');
        return userDataString ? JSON.parse(userDataString) : {};
    }
    setSelectedCourse(courseId) {
        let userData = this.getUserData();
        userData.SelectedCourseId = courseId;
        localStorage.setItem("userData", JSON.stringify(userData));
    }
    getChannelConfiguration() {
        var userData = this.getUserData();
        let channelConfig = new ChannelConfig();
        channelConfig.url = "http://girlsinc.azurewebsites.net/signalr";
        channelConfig.hubName = "inClassHub";
        channelConfig.params = new Map<string, string>();
        channelConfig.params['uid'] = userData.UserId;
        channelConfig.params['courseClassId'] = userData.SelectedCourseId;
        return channelConfig;
    }
}