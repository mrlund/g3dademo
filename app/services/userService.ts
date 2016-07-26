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

    constructor(private router: Router, private http: Http){}

    logout():void{
        localStorage.removeItem("api_token");
        this.router.navigate(['/login']);
    }

    newLogin(user) {
        let creds = "username=" + user.login + "&password=" + user.password + "&grant_type=password";
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');

        this.http.post('/login-api' + '/token', creds, {headers: headers}).subscribe(res => {
            let parsedRes = res.json();
            let token = parsedRes['access_token'];
            localStorage.setItem("api_token", token);
            let headers = new Headers();
            headers.append('Authorization', 'Bearer ' + token);
            //get data of userprofile
            this.http.get('/app-api' + '/api/account/userprofile', {headers: headers}).subscribe(res => {
                let parsedRes = res.json();
                localStorage.setItem("userData", parsedRes);
                this.router.navigate(['/main']);
            });

        });
    }

    checkCredentials():void{
        //Changed to eliminate the need to login for the time being. 
        //let nextState = localStorage.getItem("api_token") === null ? '/login' : '/main';
        let nextState = '/main';
        this.router.navigate([nextState]);
    }
    goToForgetPasswordPage():void{
        this.router.navigate(['/forget-password']);
    }
    resetPassword():void{
        this.router.navigate(['/login']);
    }
}