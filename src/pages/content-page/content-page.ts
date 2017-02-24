import {NavController, NavParams, MenuController, ToastController, Events} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {ContentData} from '../../providers/contentProvider';
import {ProgressProvider} from '../../providers/progressProvider';

import {InnerContent} from '../../components/inner-content/inner-content';
import {ContentItem, AnimationContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';
import {CharacterPhraseImg} from "../../components/character-phrase-img/character-phrase-img";
import {ModalService} from "../../services/modalService";
import {UserService} from "../../services/userService";
import {ChannelService} from "../../services/channelService";
import { BaseContentPage } from '../page-types';

@Component({
    templateUrl: 'content-page.html'
})
export class ContentPage extends BaseContentPage {
    selectedItem: ContentItem;
    _pageContent: string;
    pageModel: string;
    animationName: string = '';
    pauseAnimation: boolean = true;
    userData: any;

    @ViewChild(InnerContent) innerContent:InnerContent;
    @ViewChild(CharacterPhraseImg) characterPhraseImg:CharacterPhraseImg;

    constructor(public nav: NavController,
                navParams: NavParams,
                public content: ContentData,
                public menu: MenuController,
                public progress: ProgressProvider,
                public userService: UserService,
                public toastController: ToastController,
                public channelService:ChannelService,
                public modalService: ModalService,
                public events: Events) {
        super();
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.userData = userService.getUserData();
        if(this.selectedItem instanceof AnimationContentItem){
            this.animationName = this.selectedItem['animationName'];
        }
        if (!this.selectedItem) {
            this.selectedItem = new ContentItem(navParams.get('urlName'), navParams.get('urlName'), ContentPage);
            this.selectedItem.project = navParams.get('project');
            this.selectedItem.session = navParams.get('session');
            this.selectedItem.menuItem = new MenuItem('Title', this.selectedItem.project, this.selectedItem.session, null, [this.selectedItem]);
            this.selectedItem.page = 2;
        }
        this._pageContent = "<h1>This is a content page!</h1>";
        this.pageModel = null;
    }

    syncPage(){
        this.channelService.getConnection().proxies.inclasshub.invoke('forceSyncClients', this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.page);
    }
    fileLink(file){
        var baseUrl = "project" + this.selectedItem.menuItem.project + "/session" +  this.selectedItem.menuItem.session + "/" + this.selectedItem.urlName + "/";
        return baseUrl + file;
    }
    toggleMenu() {
        if (this.menu.isOpen()) {
            this.menu.close();
        } else {
            this.menu.open();
        }
    }
    navigateBackTo(page: ContentItem) {
        this.events.publish('lesson:next-prev');
        this.progress.openPage(page);
        this.pauseAnimation = true;
        this.nav.pop();
    }
    navigateForwardTo(page: ContentItem) {
        this.events.publish('lesson:next-prev');
        this.progress.openPage(page);
        this.pauseAnimation = true;
        this.nav.push(page.componentType, { item: page });
    }
    finishSession() {
        this.progress.finishSession(this.selectedItem.menuItem);
    }
    setAnimationState(event){
        console.log(event);
        this.pauseAnimation = event;
    }
    createNote(){
        this.modalService.showAddNotePopup();
    }

}
