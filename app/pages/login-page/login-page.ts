import {Component} from '@angular/core';
import {UserService, User} from '../../services/userService';

@Component({
  templateUrl: 'build/pages/login-page/login-page.html',
  selector : 'login-page-cmp',
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
    this.userService.singUp(obj);
  }
  redirectToForgotPasswordPage(){
    this.userService.goToForgetPasswordPage();
  }
}