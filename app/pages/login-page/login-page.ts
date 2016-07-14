import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProgressProvider} from '../../providers/progressProvider';
import {UserService} from '../../services/userService';

@Component({
  templateUrl: 'build/pages/login-page/login-page.html'
})
export class LoginPage {
  login: string;
  password: string;

  constructor(userService: UserService) {
    this.login = '';
    this.password = '';

  }

  ngOnInit() {
  }

  login(){
    
  }
}
