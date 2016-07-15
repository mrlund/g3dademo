import { Injectable } from '@angular/core';
import {Router} from '@angular/router';


export class User {
    constructor(
        public login: string,
        public password: string) { }
}

var users = [
    new User('test','test')
];

@Injectable()
export class UserService {
    
    constructor(private _router: Router){}

    logout():void{
        localStorage.removeItem("user");
        this._router.navigate(['/login']);
    }

    login(user):boolean{
        let authenticatedUser = users.find(u => u.login === user.login);
        if (authenticatedUser && authenticatedUser.password === user.password){
            localStorage.setItem("user", JSON.stringify(authenticatedUser));
            this._router.navigate(['/main']);
            return true;
        }
        return false;
    }

    checkCredentials():void{
        let nextState = localStorage.getItem("user") === null ? '/login' : '/main';
        this._router.navigate([nextState]);
    }
}