import {Component} from '@angular/core';
import {NavController, NavParams, MenuController, Toast} from 'ionic-angular';
import {ContentData} from '../../providers/contentProvider';
import {WelcomePage} from '../welcome-page/welcome-page';
import {ContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';

import {ProgressProvider} from '../../providers/progressProvider';
import {ChannelService} from '../../services/channelService';

@Component({
    templateUrl: 'build/pages/answer-question-page/answer-question-page.html',
    providers: [],
    directives: []
})
export class AnswerQuestionPage {
    selectedItem: any;
    pageContent: string;
    questions: Array<any>;

    constructor(private nav: NavController, navParams: NavParams, private content: ContentData, private menu: MenuController, private progress: ProgressProvider, private channelService:ChannelService) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
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
                this.pageContent = data._body;
            },
            (error) => {
                console.log(error);
            }
        );
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
        let toast = Toast.create({
            message: 'Congratulations - You completed the lesson!',
            duration: 1000
        });
        toast.onDismiss(() => {
            let nextLessonPage = self.progress.findNextLesson(self.selectedItem.menuItem)
            if(nextLessonPage && nextLessonPage.pages && nextLessonPage.pages[0]){ // if there is next page so open it
                let firstContentPage = nextLessonPage.pages[0];
                self.progress.openPage(firstContentPage);
                self.nav.setRoot(firstContentPage.componentType, { item: firstContentPage });
            } else {
                this.nav.setRoot(WelcomePage); // if no next page so open welcome page
            }
        });
        this.nav.present(toast);
    }
    onSuggest(question){
        this.channelService.getConnection().proxies.inclasshub.invoke('send', 'student', question.suggestion);
    }

}
