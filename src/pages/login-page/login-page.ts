import {Component} from '@angular/core';
import {UserService, User} from '../../services/userService';

@Component({
  templateUrl: 'login-page.html',
  selector : 'login-page-cmp',
})
export class LoginPage {
  authType: string = "login";

  constructor(public userService: UserService) {
    let token = this.userService.getToken();
    if (token){
      let firstEq = token.indexOf("=") + 1;
      token = token.slice(firstEq, token.indexOf("&"));
      console.log("Token: " + token );
      this.userService.saveToken("");
      userService.loginWithToken(token);
    }

  }

  loginWithGoogle(){
    this.userService.redirectGoogleAuth();
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
