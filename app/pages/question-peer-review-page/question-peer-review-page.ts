import {NavController, NavParams, MenuController, Toast, Loading } from 'ionic-angular';
import {Component} from '@angular/core';
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
    pageContent: string;
    questions: Array<any>;
    state: string = "answer";
    loader: Loading;

    constructor(private nav: NavController, navParams: NavParams, private content: ContentData, private menu: MenuController, private progress: ProgressProvider, private channelService:ChannelService) {
        // If we navigated to this page, we will have an item available as a nav param
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
                this.pageContent = data._body;
            },
            (error) => {
                console.log(error);
            }
        );
        this.channelService.getConnection().proxies.inclasshub.on('receiveAssignment', (answer) => {
            console.log("Got in page:", answer);
            this.state = "give-feedback";
            this.gotAssignment(answer);
        });
    }
    gotAssignment(answer){
        this.questions = answer.questions;
        this.state = "give-feedback";
    }
    submitAnswers(){
        this.loader = Loading.create();
        this.channelService.getConnection().proxies.inclasshub.invoke("submitAnswer", this.getAnswer());
        this.state = "loading";
    }
    submitFeedback(){
        this.state = "get-feedback";
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
            return JSON.parse(resp);
    }

}
