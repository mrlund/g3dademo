import {NavController, NavParams, MenuController} from 'ionic-angular';
import {Component} from '@angular/core';
import {ContentData} from '../../providers/contentProvider';
import {WelcomePage} from '../welcome-page/welcome-page';
import {DomSanitizationService, SafeHtml} from "@angular/platform-browser";

@Component({
  templateUrl: 'build/pages/discussion-page/discussion-page.html',
  providers: [],
  directives: []
})
export class DiscussionPage {
  selectedItem: any;
  private _pageContent: string;
  animationName: string;

  constructor(private nav: NavController,
              navParams: NavParams,
              content: ContentData,
              private menu: MenuController,
              private _sanitizer: DomSanitizationService) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
  public get pageContent() : SafeHtml {
      return this._sanitizer.bypassSecurityTrustHtml(this._pageContent); //to avoid xss attacks warnings
  }
  toggleMenu(){
      if (this.menu.isOpen())
      {
          this.menu.close();
      } else {
          this.menu.open();
      }
  }
  navigateBackTo(page){
        this.nav.pop();
  }  
  navigateForwardTo(page){
      this.nav.push(page.componentType, {item: page});
  }
  finishSession(){
      this.nav.setRoot(WelcomePage);
  }
  
}
