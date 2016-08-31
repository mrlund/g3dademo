import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers} from '@angular/http';
import {Globals} from "../globals";


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

    }

    logout():void{
        localStorage.removeItem("api_token");
        this._globals.isLoggedIn.next(false);
        this.router.navigate(['/login']);
    }

    singUp(newUserData: any) {
        this.http.post('/app-api' + '/api/account/register', newUserData).subscribe(res => {
            this.router.navigate(['/login']);
        });
    }

    newLogin(user) {
        let creds = "username=" + user.login + "&password=" + user.password + "&grant_type=password";
        let headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        this.http.post('/app-api' + '/token', creds, {headers: headers}).subscribe(res => {
            let parsedRes = res.json();
            let token = parsedRes['access_token'];
            localStorage.setItem("api_token", token);
            this._globals.isLoggedIn.next(true);
            let headers = new Headers();
            headers.append('Authorization', 'Bearer ' + token);
            //get data of userprofile
            this.http.get('/app-api' + '/api/account/userprofile', {headers: headers}).subscribe(res => {
                let parsedRes = res.json();
                localStorage.setItem("userData", JSON.stringify(parsedRes));
                this.router.navigate(['/main']);
            });
        });
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
}