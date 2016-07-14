import {NavController, NavParams, MenuController, Toast, Loading } from 'ionic-angular';
import {DomSanitizationService, SafeHtml} from "@angular/platform-browser";
import {Component, ChangeDetectorRef} from '@angular/core';
import {ContentData} from '../../providers/contentProvider';
import {WelcomePage} from '../welcome-page/welcome-page';
import {ContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';

import {ProgressProvider} from '../../providers/progressProvider';
import {ChannelService} from '../../services/channelService';

@Component({
    templateUrl: 'build/pages/question-peer-review-page/question-peer-review-page.html',
    providers: [],
    directives: []
})
export class QuestionPeerReviewPage {
    selectedItem: any;
    private _pageContent: string;
    questions: Array<any>;
    state: string = '';
    loader: Loading;
    receivedReview: any; 
    submittedReview: boolean;
    respondingToClientId: string;

    constructor(private nav: NavController, navParams: NavParams, private content: ContentData,
                private menu: MenuController, private progress: ProgressProvider, private channelService:ChannelService,
                private cdRef: ChangeDetectorRef, private _sanitizer: DomSanitizationService) {

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
            },
            (error) => {
                console.log(error);
            }
        );

        let answersDataObservable = this.channelService.getAssignmentData();
        answersDataObservable['source'].subscribe((answer) => {
            console.log("Got assignment:", answer);
            for(let question of answer.questions) { // to reset isCorrect and response fields before giving feedback
                let firstAnswer = question['answers'][0];
                firstAnswer['isCorrect'] = null;
                firstAnswer['response'] = null;
            }
            this.state = "give-feedback";
            this.gotAssignment(answer);
        });
        let reviewDataObservable = this.channelService.getReviewData();
        reviewDataObservable['source'].subscribe((answer) => {
            console.log("Got review:", answer);
            if (this.receivedReview){
                console.log("Show feedback");
                this.state = "get-feedback";
                this.gotAssignment(answer);
            } else {
                console.log("Still giving feedback, store for later.");
                this.receivedReview = answer;
            }
        });        
    }
    public get pageContent() : SafeHtml {
        return this._sanitizer.bypassSecurityTrustHtml(this._pageContent); //to avoid xss attacks warnings
    }

    gotAssignment(answer){
        this.respondingToClientId = answer.ClientId;
        this.questions = answer;
        this.cdRef.detectChanges();
    }
    submitAnswers(){
        this.loader = Loading.create();
        this.channelService.getConnection().proxies.inclasshub.invoke("submitAnswer", this.questions); //JSON.stringify(this.questions)
        this.state = "loading";
    }    
    submitFeedback(){
        this.channelService.getConnection().proxies.inclasshub.invoke("submitReview", this.questions);
        if (this.receivedReview){
            this.questions = this.receivedReview;
            this.state = "get-feedback";
            this.cdRef.detectChanges();
        }else {
            this.receivedReview = true;
            this.state = "loading";
        }        
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
        this.progress.completeLesson(this.selectedItem.menuItem);
        let toast = Toast.create({
            message: 'Congratulations - You completed the lesson!',
            duration: 1000
        });
        toast.onDismiss(() => {
            this.nav.setRoot(WelcomePage);
        });
        this.nav.present(toast);
    }
    private getAnswer(){
        var resp = `{
            "questions": [
                {
                    "questionId": 100,
                    "type": "peer-review",
                    "question": "What conclusions can you draw from this data?",
                    "answers": [
                        {
                            "answer": "Education, Parents",
                            "isCorrect": true,
                            "response": "I agree"
                        }
                    ]
                },
                {
                    "questionId": 101,
                    "type": "peer-review",
                    "question": "What are some reasons why higher education leads to a higher annual salary?",
                    "answers": [
                        {
                            "answer": "Education",
                            "isCorrect": true,
                            "response": "With a good education you can make it on your own."
                        }
                    ]

                },
                {
                    "questionId": 102,
                    "type": "peer-review",
                    "question": "What stands out to you about this data set? Why?",
                    "answers": [
                        {
                            "answer": "Education",
                            "isCorrect": false,
                            "response": "With a good education you can make it on your own."
                        }
                    ]

                }

            ]
            }`;
            var obj = JSON.parse(resp); 
            if (this.respondingToClientId){
                obj.ClientId = this.respondingToClientId;
            }
            return obj;
    }

}
