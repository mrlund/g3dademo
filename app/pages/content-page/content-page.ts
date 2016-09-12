import {NavController, NavParams, MenuController, Toast, ToastController} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {ContentData} from '../../providers/contentProvider';
import {ProgressProvider} from '../../providers/progressProvider';

import {WelcomePage} from '../welcome-page/welcome-page';
import {Animation} from '../../components/animation/animation';
import {InnerContent} from '../../components/inner-content/inner-content';
import {ContentItem, AnimationContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';
import {CharacterPhraseImg} from "../../components/character-phrase-img/character-phrase-img";
import {ModalService} from "../../services/modalService";

@Component({
    templateUrl: 'build/pages/content-page/content-page.html',
    providers: [],
    directives: [Animation, InnerContent, CharacterPhraseImg]
})
export class ContentPage {
    selectedItem: ContentItem;
    pageContent: string;
    pageModel: string;
    animationName: string = '';
    pauseAnimation: boolean = true;

    @ViewChild(InnerContent) innerContent:InnerContent;
    @ViewChild(CharacterPhraseImg) characterPhraseImg:CharacterPhraseImg;

    constructor(private nav: NavController,
                navParams: NavParams,
                private content: ContentData,
                private menu: MenuController,
                private progress: ProgressProvider,
                private toastController: ToastController,
                private modalService: ModalService) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
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
        this.pageContent = "<h1>This is a content page!</h1>";
        this.pageModel = null;
    }
    ngOnInit(){
        let self = this;
        this.content.loadContent(this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.urlName).then(
            (data) => {
                self.pageContent = data['_body'];
                self.content.loadModel(self.selectedItem.menuItem.project, self.selectedItem.menuItem.session, self.selectedItem.urlName).then(
                    (data) => {
                        self.pageModel = data['_body'] ? JSON.parse(data['_body']) : null;
                        self.characterPhraseImg.draw(self.pageModel);
                        self.innerContent.recompileTemplate(self.pageContent, self.pageModel);
                    }
                ).catch((e) => {
                    self.innerContent.recompileTemplate(self.pageContent, self.pageModel);
                })
            },
            (error) => {
                console.log(error);
            }
        );
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
        this.progress.openPage(page);
        this.pauseAnimation = true;
        this.nav.pop();
    }
    navigateForwardTo(page: ContentItem) {
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
