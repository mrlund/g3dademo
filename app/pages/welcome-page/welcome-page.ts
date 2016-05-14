import {Page, NavController} from 'ionic-angular';


@Page({
  templateUrl: 'build/pages/welcome-page/welcome-page.html'
})
export class WelcomePage {
  constructor(private nav: NavController){
    
  }
  
  ngOnInit() {
    //this.nav.setRoot(WelcomePage);
  }
}
