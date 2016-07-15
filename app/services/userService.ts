import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers} from '@angular/http';


export class User {
    constructor(
        public login: string,
        public password: string) { }
}

@Injectable()
export class UserService {
    private _baseUrl: string = 'https://rsvpdk-staging.azurewebsites.net';
    
    constructor(private router: Router, private http: Http){}

    logout():void{
        localStorage.removeItem("api_token");
        this.router.navigate(['/login']);
    }

    newLogin(user) {
        let creds = "username=" + user.login + "&password=" + user.password + "&grant_type=password";
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.post(this._baseUrl + '/token', creds, {headers: headers}).subscribe(res => {
            var parsedRes = res.json();
            localStorage.setItem("api_token", parsedRes['access_token']);
            this.router.navigate(['/main']);
        });
    }

    checkCredentials():void{
        let nextState = localStorage.getItem("api_token") === null ? '/login' : '/main';
        this.router.navigate([nextState]);
    }
}