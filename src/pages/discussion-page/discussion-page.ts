import {NavController, NavParams, MenuController} from 'ionic-angular';
import {Component} from '@angular/core';
import {WelcomePage} from '../welcome-page/welcome-page';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {ModalService} from "../../services/modalService";
import {ContentData} from "../../providers/contentProvider";
import {UserService} from "../../services/userService";
import {ChannelService} from '../../services/channelService';

@Component({
  templateUrl: 'discussion-page.html'
})
export class DiscussionPage {
  selectedItem: any;
  public _pageContent: string;
  animationName: string;
  userData: any;

  constructor(public nav: NavController,
              navParams: NavParams,
              content: ContentData,
              public modalService: ModalService,
              public menu: MenuController,
              public userService: UserService,
              public channelService:ChannelService,
              public _sanitizer: DomSanitizer) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
    this.userData = userService.getUserData();
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
  syncPage(){
      this.channelService.getConnection().proxies.inclasshub.invoke('forceSyncClients', this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.page);
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
  createNote(){
      this.modalService.showAddNotePopup();
  }

}
