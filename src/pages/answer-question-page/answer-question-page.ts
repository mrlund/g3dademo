import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';
import {ContentData} from '../../providers/contentProvider';
import {ContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';

import {ProgressProvider} from '../../providers/progressProvider';
import {ChannelService} from '../../services/channelService';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {CharacterPhraseImg} from "../../components/character-phrase-img/character-phrase-img";
import {InnerContent} from "../../components/inner-content/inner-content";
import {UserService} from "../../services/userService";
import {ModalService} from "../../services/modalService";
import {Globals} from "../../app/globals";
import {ApiService} from "../../services/apiService";
import {Subscription} from "rxjs/Subscription";

@Component({
    templateUrl: 'answer-question-page.html'
})
export class AnswerQuestionPage {
    selectedItem: any;
    public _pageContent: string;
    public isClassroomModeOn: boolean = false;
    questions: Array<any>;
    userData: Map<string, string>;

    classroomModeSub: Subscription;
    responseSub: Subscription;
    suggestSub: Subscription;


    @ViewChild(CharacterPhraseImg) characterPhraseImg:CharacterPhraseImg;
    @ViewChild(InnerContent) innerContent:InnerContent;

    constructor(public nav: NavController,
                navParams: NavParams,
                public content: ContentData,
                public progress: ProgressProvider,
                public channelService:ChannelService,
                public _sanitizer: DomSanitizer,
                public userService: UserService,
                public modalService: ModalService,
                public menu: MenuController,
                public _globals: Globals,
                public apiService: ApiService) {
        this.classroomModeSub = _globals.isClassroomModeOn.subscribe((data) => {
            this.isClassroomModeOn = data;
        });
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        this.userData = userService.getUserData();
        if (!this.selectedItem)
        {
            this.selectedItem = new ContentItem(navParams.get('urlName'), navParams.get('urlName'), AnswerQuestionPage);
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
    ngOnDestroy(){
        if(this.classroomModeSub) this.classroomModeSub.unsubscribe();
        if(this.responseSub) this.responseSub.unsubscribe();
        if(this.suggestSub) this.suggestSub.unsubscribe();
    }
    public get pageContent() : SafeHtml {
        return this._sanitizer.bypassSecurityTrustHtml(this._pageContent); //to avoid xss attacks warnings
    }
    toggleMenu() {
        if (this.menu.isOpen()) {
            this.menu.close();
        } else {
            this.menu.open();
        }
    }
    syncPage(){
        this.channelService.getConnection().proxies.inclasshub.invoke('forceSyncClients', this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.page);
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
        this.progress.finishSession(this.selectedItem.menuItem);
    }
    sendResponses(question, answer){
        question.answers.forEach(ans => {
            if (ans == answer){
                ans.voteState = "votedFor";
            } else {
                ans.voteState = "voted";
            }
        });
        this.responseSub = this.apiService.postResponces(question).subscribe((data) => {
            console.log('answer posted')
        });
    }
    onSuggest(question){
        if (!question.suggestions){
            question.suggestions = [];
        }
        question.suggestions.push(question.suggestion);

        var sendQuestion = JSON.parse(JSON.stringify(question));
        sendQuestion.suggestions = [];
        sendQuestion.suggestions.push(question.suggestion);
        this.channelService.getConnection().proxies.inclasshub.invoke('send', 'question-answer', question.questionId, this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.page, this.userData["Name"], question.question, question.suggestion);
        question.suggestion = "";
        this.suggestSub = this.apiService.postResponces(sendQuestion).subscribe((data) => {
            console.log('answer posted')
        });
    }
    questionsNotProcessed() {
        var isNotAllQuestionsHasSuggestion = false;
        if(this.isClassroomModeOn) {
            isNotAllQuestionsHasSuggestion = true;
        }
        if (this.questions != null && this.isClassroomModeOn) {
            isNotAllQuestionsHasSuggestion = this.questions['questions'].some(this.hasNoOneSuggestionOrAnswer);
        }
        return isNotAllQuestionsHasSuggestion;
    }
    hasNoOneSuggestionOrAnswer(question) {
        if(question.type == 'discussion') return !question.suggestions || question.suggestions.length === 0;
        if(question.type == 'multiple-choice') return typeof question.answered == 'undefined';
    }
    goToTeacherPage():void{
        // this.nav.setRoot(TeacherPage);
        this.modalService.showTeacherPagePopup();    }
    createNote(){
        this.modalService.showAddNotePopup();
    }
}
