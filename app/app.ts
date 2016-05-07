import {App, IonicApp, Platform, MenuController} from 'ionic-angular';
import {RouteConfig} from 'angular2/router';

import {WelcomePage} from './pages/welcome-page/welcome-page';
import {ContentPage} from './pages/content-page/content-page';
import {AnswerQuestionPage} from './pages/answer-question-page/answer-question-page';
import {QuestionPeerReviewPage} from './pages/question-peer-review-page/question-peer-review-page';

import {MenuItem} from './models/menu-item';
import {ContentItem} from './models/content-item';


@App({
    templateUrl: 'build/app.html',
    config: {
        mode: 'ios'
    } // http://ionicframework.com/docs/v2/api/config/Config/
})
@RouteConfig([ 
    { path: '/', component: WelcomePage, as: 'First' }, 
    { path: '/content/:project/:session/:urlName', component: ContentPage, as: 'Content' },
    { path: '/question/:project/:session/:urlName', component: AnswerQuestionPage, as: 'Question' },
    { path: '/question-peer/:project/:session/:urlName', component: QuestionPeerReviewPage, as: 'QuestionPeer' }
 ]) 
class MyApp {
    // make HelloIonicPage the root (or first) page
    rootPage: any = WelcomePage;
    pages: Array<MenuItem>;
    openMenuGroup: MenuItem;
    completedItems: Array<string>;

    constructor(
        private app: IonicApp,
        private platform: Platform,
        private menu: MenuController
    ) {
        this.initializeApp();
        
        
        // set our app's pages
        this.pages = [
            new MenuItem('Home', 0, 0, null),
            //Project
            new MenuItem('Your GPA - Is It Fair?', 1, 0, [
                //Session
                new MenuItem('Introduction', 1, 1, null, [
                    //Pages
                    new ContentItem('intro', 'Introduction', ContentPage),
                    new ContentItem('assignment', 'Objectives', ContentPage),
                    new ContentItem('objectives', 'Assignment', ContentPage),
                    new ContentItem('pre-test', 'Pre-Test', AnswerQuestionPage)
                ]),
                new MenuItem('How To Calculate GPA', 1, 2, null, [
                    //Page
                    new ContentItem('introduction', 'Introduction', AnswerQuestionPage),
                    new ContentItem('average-earnings', 'Average Annual Earnings', QuestionPeerReviewPage)
                ]),
                new MenuItem('Graphing Quartiles', 1, 2, null, null),
                new MenuItem('Assumptions Of GPA', 1, 3, null, null),
                new MenuItem('Graphing Interval Data', 1, 4, null, null),
                new MenuItem('Is GPA A Fair Use Of Data', 1, 5, null, null),
                new MenuItem('Summary/Quiz', 1, 6, null, null),
            ]),
            new MenuItem('2: Is School Discipline Fair?', 2, 0, [
                new MenuItem('Introduction', 2, 1, null, null),
                new MenuItem('Representing Quantitive Data', 2, 2, null, null),
                new MenuItem('Analyzing Data - Mean', 2, 3, null, null),
                new MenuItem('Analyzing Data - Standard Deviation', 2, 4, null, null),
                new MenuItem('Making Prediction About Data', 2, 5, null, null),
                new MenuItem('Breaking the Cycle', 2, 6, null, null),
                new MenuItem('Summary/Quiz', 2, 7, null, null),
            ]),
            new MenuItem('3: Shoplifting', 3, 0, [
                new MenuItem('Introduction', 3, 1, null, null),
                new MenuItem('Data Distribution - Shape', 3, 2, null, null),
                new MenuItem('Determining Outliers in Data', 3, 3, null, null),
                new MenuItem('Analyzing the Impact of Outliers', 3, 4, null, null),
                new MenuItem('Summary/Quiz', 3, 5, null, null),
            ]),
            new MenuItem('4: Cell Phone Usage', 4, 0, [
                new MenuItem('Introduction', 4, 1, null, null),
                new MenuItem('Unobtrusive Measures', 4, 2, null, null),
                new MenuItem('Data Representation: Tables and Charts', 4, 3, null, null),
                new MenuItem('Two Way Frequency Tables', 4, 4, null, null),
                new MenuItem('Summary/Quiz', 4, 5, null, null)
            ])
        ];

        this.completedItems = ["Introduction", "How To Calculate GPA", "Graphing Quartiles"];

        this.setupMenuNodes();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // The platform is now ready. Note: if this callback fails to fire, follow
            // the Troubleshooting guide for a number of possible solutions:
            //
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            //
            // First, let's hide the keyboard accessory bar (only works natively) since
            // that's a better default:
            //
            // Keyboard.setAccessoryBarVisible(false);
            //
            // For example, we might change the StatusBar color. This one below is
            // good for dark backgrounds and light text:
            // StatusBar.setStyle(StatusBar.LIGHT_CONTENT)
            
        });
    }
    setupMenuNodes() {
        for (var i = 0; i < this.pages.length; i++) {
            if (this.pages[i].children) {
                this.setupChildren(this.pages[i]);
            }
        }
    }
    setupChildren(node: MenuItem) {
        for (var i = 0; i < node.children.length; i++) {
            if (node.children[i].children) {
                this.setupChildren(node.children[i]);
            } else if (node.children[i].pages && node.children[i].pages.length > 0) {
                node.children[i].pages.forEach((element, index) => {
                    element.page = index + 1;
                    element.menuItem = node.children[i];
                    element.prevItem = index > 0 ? node.children[i].pages[index - 1] : null;
                    element.nextItem = index < node.children[i].pages.length ? node.children[i].pages[index + 1] : null;
                });
            }
        }
    }
    openPage(page: MenuItem) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        let nav = this.app.getComponent('nav');
        //console.log(page);
        
        var firstContentPage = page.pages[0];
        nav.setRoot(firstContentPage.componentType, { item: firstContentPage });
    }
    showChildren(item) {
        if (item.children) {
            if (this.openMenuGroup == item) {
                this.openMenuGroup = null;
            } else {
                this.openMenuGroup = item;
            }
        } else {
            let nav = this.app.getComponent('nav');
            this.menu.close();
            nav.setRoot(WelcomePage);
        }
    }
    isDisplayed(item) {
        if (this.openMenuGroup) {
            //console.log("Open  " + this.openMenuGroup.title + "Checking: " + item.title);
            return this.openMenuGroup != item;
        }
        //console.log(item.title);
        return true;
    }
    isComplete(item) {
        return this.completedItems.indexOf(item.title) > -1;
    }

}

