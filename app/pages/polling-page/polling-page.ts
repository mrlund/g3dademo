import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, MenuController, Toast, ToastController} from 'ionic-angular';
import {ContentData} from '../../providers/contentProvider';
import {WelcomePage} from '../welcome-page/welcome-page';
import {ContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';

import {ProgressProvider} from '../../providers/progressProvider';
import {ChannelService} from '../../services/channelService';
import {DomSanitizationService, SafeHtml} from "@angular/platform-browser";
import {CharacterPhraseImg} from "../../components/character-phrase-img/character-phrase-img";
import {InnerContent} from "../../components/inner-content/inner-content";
import {ModalService} from "../../services/modalService";
import {Globals} from "../../globals";
import {ApiService} from "../../services/apiService";
import {UserService} from "../../services/userService";

@Component({
    templateUrl: 'build/pages/polling-page/polling-page.html',
    providers: [],
    directives: [CharacterPhraseImg, InnerContent]
})
export class PollingPage {
    selectedItem: any;
    private _pageContent: string;
    questions: Array<any>;
    isClassroomModeOn : boolean = false;
    userData: Map<string, string>;

    @ViewChild(CharacterPhraseImg) characterPhraseImg:CharacterPhraseImg;
    @ViewChild(InnerContent) innerContent:InnerContent;

    constructor(private nav: NavController,
                navParams: NavParams,
                private content: ContentData,
                private menu: MenuController,
                private progress: ProgressProvider,
                private channelService:ChannelService,
                private _sanitizer: DomSanitizationService,
                private toastController: ToastController,
                private modalService: ModalService,
                private _globals: Globals,
                private apiService: ApiService,
                private userService: UserService) {
        this.userData = userService.getUserData();
        _globals.isClassroomModeOn.subscribe((data) => {
            this.isClassroomModeOn = data;
        });
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        if (!this.selectedItem)
        {
            this.selectedItem = new ContentItem(navParams.get('urlName'), navParams.get('urlName'), PollingPage);
            this.selectedItem.project = navParams.get('project');
            this.selectedItem.session = navParams.get('session');
            this.selectedItem.menuItem = new MenuItem('Title', this.selectedItem.project, this.selectedItem.session, null, [this.selectedItem]);
            this.selectedItem.page = 2;
        }
    }
    ngOnInit() {
        this.content.loadQuestions(this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.urlName).then(
            (data) => {
                this.questions = data;
            },
            (error) => {
                console.log(error);
            }
        );
        this.content.loadContent(this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.urlName).then(
            (data) => {
                this._pageContent = data._body;
                this.content.loadModel(this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.urlName).then(
                    (data) => {
                        let pageModel = data['_body'] ? JSON.parse(data['_body']) : null;
                        this.innerContent.recompileTemplate(this._pageContent, pageModel, this);
                        this.characterPhraseImg.draw(pageModel);
                    }
                ).catch((e) => {
                    this.innerContent.recompileTemplate(this._pageContent, '');
                })
            },
            (error) => {
                console.log(error);
            }
        );
    }
    public get pageContent() : SafeHtml {
        return this._sanitizer.bypassSecurityTrustHtml(this._pageContent); //to avoid xss attacks warnings
    }
    syncPage(){
        this.channelService.getConnection().proxies.inclasshub.invoke('forceSyncClients', this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.page);
    }
    toggleMenu() {
        if (this.menu.isOpen()) {
            this.menu.close();
        } else {
            this.menu.open();
        }
    }
    navigateBackTo(page) {
        this.progress.openPage(page);
        this.nav.pop();
    }
    navigateForwardTo(page) {
        this.progress.openPage(page);
        this.nav.push(page.componentType, { item: page });
    }
    finishSession() {
        let self = this;
        this.progress.completeLesson(this.selectedItem.menuItem);
        let toast = this.toastController.create({
            message: 'Congratulations - You completed the lesson!',
            duration: 3000
        });
        toast.onDidDismiss(() => {
            // let nextLessonPage = self.progress.findNextLesson(self.selectedItem.menuItem)
            // if(nextLessonPage && nextLessonPage.pages && nextLessonPage.pages[0]){ // if there is next page so open it
            //     let firstContentPage = nextLessonPage.pages[0];
            //     self.progress.openPage(firstContentPage);
            //     self.nav.setRoot(firstContentPage.componentType, { item: firstContentPage });
            // } else {
            //     this.nav.setRoot(WelcomePage); // if no next page so open welcome page
            // }
            this.nav.setRoot(WelcomePage); //now we need only welcome page after finishing lesson in all cases;
        });
        toast.present();
    }
    onSuggest(question, answer){
        question.answers.forEach(ans => {
            if (ans == answer){
                ans.voteState = "votedFor";
            } else {
                ans.voteState = "voted";
            }
        });
        this.channelService.getConnection().proxies.inclasshub.invoke('send', 'poll', question.questionId, this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.page, this.userData["Name"], question.question, answer.answer);

        this.apiService.postResponces(question).subscribe((data) => {
            console.log('answer posted')
        });
    }
    createNote(){
        this.modalService.showAddNotePopup();
    }
    questionsNotAnswered() {
      var isNotAllQuestionsAnswered = false;
      if(this.isClassroomModeOn) {
        isNotAllQuestionsAnswered = true;
      }
      if (this.questions != null && this.isClassroomModeOn) {
        isNotAllQuestionsAnswered = this.questions['questions'].some(this.notAnsweredYet);
      }
      return isNotAllQuestionsAnswered;
    }
    notAnsweredYet(question) {
      return question.answers.every(answer => {
        return !answer.voteState || (answer.voteState && answer.voteState === "voted");
      });
    }
    goToTeacherPage():void{
        // this.nav.setRoot(TeacherPage);
        this.modalService.showTeacherPagePopup();
    }

}
