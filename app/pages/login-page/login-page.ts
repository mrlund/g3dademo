import {Component} from '@angular/core';
import {UserService, User} from '../../services/userService';

@Component({
  templateUrl: 'build/pages/login-page/login-page.html',
})
export class LoginPage {
  authType: string = "login";

  constructor(private userService: UserService) {
  }

  loginAction(obj: any){
    let user = new User(obj.login, obj.password);
    this.userService.newLogin(user);
  }
  signupAction(obj: any){
    alert('need to implement signup method');
  }
  redirectToForgotPasswordPage(){
    this.userService.goToForgetPasswordPage();
  }
}
