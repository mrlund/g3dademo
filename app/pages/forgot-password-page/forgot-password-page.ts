import {Component} from '@angular/core';
import {UserService, User} from '../../services/userService';

@Component({
    templateUrl: 'build/pages/forgot-password-page/forgot-password-page.html'
})
export class ForgotPassword {

    constructor(private userService: UserService) {
    }
    resetPasswordAction(obj: any){
        alert('need to implement action to reset password');
        this.userService.resetPassword();
    }
    
}
