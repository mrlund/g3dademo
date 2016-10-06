import {NavController, NavParams, LoadingController, MenuController} from 'ionic-angular';
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {Component, ChangeDetectorRef, ViewChild} from '@angular/core';
import {ContentData} from '../../providers/contentProvider';
import {ContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';

import {ProgressProvider} from '../../providers/progressProvider';
import {ChannelService} from '../../services/channelService';

import {CharacterPhraseImg} from "../../components/character-phrase-img/character-phrase-img";
import {InnerContent} from "../../components/inner-content/inner-content";
import {ModalService} from "../../services/modalService";
import {Globals} from "../../app/globals";
import {UserService} from "../../services/userService";
import {Subscription} from "rxjs/Subscription";


@Component({
    templateUrl: 'question-peer-review-page.html'
})
export class QuestionPeerReviewPage {
    selectedItem: any;
    public _pageContent: string;
    public isClassroomModeOn: boolean;
    questions: any;
    state: string = 'answering';
    formComplete: boolean = false;
    userData: Map<string, string>;

    answerSub: Subscription;
    reviewSub: Subscription;
    stateSub: Subscription;
    classroomModeSub: Subscription;

    submittedReview: boolean = false;

    @ViewChild(CharacterPhraseImg) characterPhraseImg:CharacterPhraseImg;
    @ViewChild(InnerContent) innerContent:InnerContent;

    constructor(public nav: NavController,
                navParams: NavParams,
                public content: ContentData,
                public progress: ProgressProvider,
                public channelService:ChannelService,
                public cdRef: ChangeDetectorRef,
                public _sanitizer: DomSanitizer,
                public loadingController:LoadingController,
                public modalService: ModalService,
                public menu: MenuController,
                public _globals: Globals,
                public userService: UserService) {
            this.userData = userService.getUserData();
            this.classroomModeSub = _globals.isClassroomModeOn.subscribe((data) => {
            this.isClassroomModeOn = data;
        });
        // If we navigated to this page, we will have an item available as a nav param
        this.state = 'answer';
        this.selectedItem = navParams.get('item');
        if (!this.selectedItem)
        {
            this.selectedItem = new ContentItem(navParams.get('urlName'), navParams.get('urlName'), QuestionPeerReviewPage);
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
                        this.updateState();
                    }
                ).catch((e) => {
                    this.innerContent.recompileTemplate(this._pageContent, '');
                })
            },
            (error) => {
                console.log(error);
            }
        );

        console.log("Subscribed");

         this.answerSub = this.channelService.getAssignmentData().subscribe((answer) => {
            console.log("Got assignment:", answer);
            for(let question of answer.questions) { // to reset isCorrect and response fields before giving feedback
                let firstAnswer = question['answers'][0];
                firstAnswer['isCorrect'] = null;
                firstAnswer['response'] = null;
            }
            this.questions = answer;
        });

        this.reviewSub = this.channelService.getReviewData().subscribe((answer) => {
            console.log("Got review:", answer);
            this.questions = answer;
        });

        this.stateSub = this.channelService.getPeerReviewState().subscribe((answer) => {
            console.log("Got state:", answer);

            if (answer != "answering"){
                this.submittedReview = true;
            } else {
                this.submittedReview = false;
            }

            this.state = answer;
            this.cdRef.detectChanges();

            setTimeout(() => {
                console.log("update: " + this.state);
            }, 10);

        });
    }
    ngOnDestroy(){
        console.log("Unsubscribe");
        if(this.stateSub) this.stateSub.unsubscribe();
        if(this.answerSub) this.answerSub.unsubscribe();
        if(this.reviewSub) this.reviewSub.unsubscribe();
        if(this.classroomModeSub) this.classroomModeSub.unsubscribe();
    }
    public get pageContent() : SafeHtml {
        return this._sanitizer.bypassSecurityTrustHtml(this._pageContent); //to avoid xss attacks warnings
    }
    syncPage(){
        this.channelService.getConnection().proxies.inclasshub.invoke('forceSyncClients', this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.page);
    }
    updateState(){
        console.log("Request update state");

        this.channelService.getConnection().proxies.inclasshub.invoke("sendUserState", "");
    }
    submitAnswers(){
        this.questions.ProjectNumber = this.selectedItem.menuItem.project;
        this.questions.SessionNumber = this.selectedItem.menuItem.session;
        this.questions.PageNumber = this.selectedItem.page;

        this.channelService.getConnection().proxies.inclasshub.invoke("submitAnswer", this.questions); //JSON.stringify(this.questions)
        this.state = "awaitingReviewAssignment";
        this.submittedReview = true;
        this.updateState();
    }
    submitFeedback(){
        this.channelService.getConnection().proxies.inclasshub.invoke("submitReview", this.questions);
        this.updateState();
    }
    pullReview(){
        this.channelService.getConnection().proxies.inclasshub.invoke("pullReview", this.questions);
    }
    validateAnswerFields(){
        for (var i = 0; i < this.questions.questions.length; i++){
            console.log(this.questions.questions[i].answers[0].answer);

            if (!this.questions.questions[i].answers[0].answer || this.questions.questions[i].answers[0].answer.length == 0){
                this.formComplete = false;
                return;
            }
        }
        this.formComplete = true;
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
        this.progress.finishSession(this.selectedItem.menuItem);
    }
    createNote(){
        this.modalService.showAddNotePopup();
    }

}
