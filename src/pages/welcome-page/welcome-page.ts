import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProgressProvider} from '../../providers/progressProvider';
import {ContentItem} from '../../models/content-item';
import {UserService} from "../../services/userService";
import {Globals} from "../../app/globals";

@Component({
  templateUrl: 'welcome-page.html'
})
export class WelcomePage {
  continueFrom: ContentItem;
  continuePage: ContentItem;
  userData: any;
  isLoggedIn: boolean = false;

  constructor(public nav: NavController,
              public progress: ProgressProvider,
              public userService: UserService,
              public _globals: Globals){
    this.userData = userService.getUserData();
      _globals.isLoggedIn.subscribe(value => {
          this.isLoggedIn = value;
      });
  }

  login(){
    this.userService.goToLogin();
  }

  ngOnInit() {
    let observable = this.progress.getLastPage();
    observable.subscribe(value => {
      this.continueFrom = value;
      this.continuePage = value;
      // this.continuePage = this.getContinuePage(value);
    });
  }
  navigateTo(page: ContentItem){
    let pages = new Array<any>();
    let loopPage: ContentItem = page;
    while (loopPage.prevItem) {
          pages.push({page: loopPage.prevItem.componentType, params: { item: loopPage.prevItem }});
          loopPage = loopPage.prevItem;
    }
    pages.reverse().push({page: page.componentType, params: { item: page }});
    this.progress.openPage(page);
    this.nav.setPages(pages)
  }
  getContinuePage(page: ContentItem){
    return page && page.nextItem ? page.nextItem : page;
  }
  startCourse(){
    let firstPage = this.progress.getFirstLesson();
    this.nav.setRoot(firstPage.componentType, { item: firstPage});
  }
}
