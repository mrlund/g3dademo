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
    let login = obj.login;
    let passwd = obj.password;
    if(login && passwd) {
      let user = new User(login, passwd);
      this.userService.newLogin(user);
    }
  }

  signupAction(obj: any){
    let login = obj.signLogin;
    let passwd = obj.signPassword;
    let passwdConfirm = obj.signPasswordConfirm;
    if(login && passwd && passwdConfirm) {
      this.userService.singUp({Email: login, Password: passwd, ConfirmPassword: passwdConfirm});
    }
  }

  redirectToForgotPasswordPage(){
    this.userService.goToForgetPasswordPage();
  }
}
