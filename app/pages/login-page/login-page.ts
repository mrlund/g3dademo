import {Component} from '@angular/core';
import {UserService, User} from '../../services/userService';

@Component({
  templateUrl: 'build/pages/login-page/login-page.html'
})
export class LoginPage {
  login: string;
  password: string;

  constructor(private userService: UserService) {
    this.login = '';
    this.password = '';
  }

  loginAction(){
    let user = new User(this.login, this.password);
    this.userService.newLogin(user);
  }
}
