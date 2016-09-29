import {Component} from '@angular/core';
import {UserService, User} from '../../services/userService';

@Component({
    templateUrl: 'forgot-password-page.html'
})
export class ForgotPassword {

    constructor(public userService: UserService) {
    }
    resetPasswordAction(obj: any){
        alert('need to implement action to reset password');
        this.userService.resetPassword();
    }

}
