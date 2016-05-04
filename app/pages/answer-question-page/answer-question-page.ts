import {Page, NavController, NavParams, MenuController, Toast} from 'ionic-angular';
import {ContentData} from '../../providers/contentProvider';
import {WelcomePage} from '../welcome-page/welcome-page';

@Page({
    templateUrl: 'build/pages/answer-question-page/answer-question-page.html',
    providers: [ContentData],
    directives: []
})
export class AnswerQuestionPage {
    selectedItem: any;
    pageContent: string;
    questions: Array<any>;

    constructor(private nav: NavController, navParams: NavParams, private content: ContentData, private menu: MenuController) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
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
        this.nav.pop();
    }
    navigateForwardTo(page) {
        this.nav.push(page.componentType, { item: page });
    }
    finishSession() {
        let toast = Toast.create({
            message: 'Congratulations - You completed the lesson!',
            duration: 1000
        });
        toast.onDismiss(() => {
            this.nav.setRoot(WelcomePage);
        });
        this.nav.present(toast);
    }

}
