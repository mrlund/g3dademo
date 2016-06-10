import {App, IonicApp, Platform, MenuController, NavController, Nav} from 'ionic-angular';
import { ViewChild } from '@angular/core';

import {Routes} from '@angular/router';
import {ProgressProvider} from './providers/progressProvider';
import {ContentData} from './providers/contentProvider';

import {WelcomePage} from './pages/welcome-page/welcome-page';
import {ContentPage} from './pages/content-page/content-page';
import {AnswerQuestionPage} from './pages/answer-question-page/answer-question-page';
import {ActivityTablePage} from './pages/activity-table-page/activity-table-page';
import {QuestionPeerReviewPage} from './pages/question-peer-review-page/question-peer-review-page';

import {MenuItem} from './models/menu-item';
import {ContentItem} from './models/content-item';

import {Events} from 'ionic-angular';

@App({
    templateUrl: 'build/app.html',
    providers: [ProgressProvider, ContentData],
    config: {
        mode: 'ios'
    } // http://ionicframework.com/docs/v2/api/config/Config/
})
@Routes([  
    { path: '/content/:project/:session/:urlName', component: ContentPage },
    { path: '/question/:project/:session/:urlName', component: AnswerQuestionPage },
    { path: '/question-peer/:project/:session/:urlName', component: QuestionPeerReviewPage },
    { path: '/activity-table/:project/:session/:urlName', component: ActivityTablePage }
 ]) 
class MyApp {
    // make HelloIonicPage the root (or first) page
    @ViewChild(Nav) nav: Nav;
    rootPage: any = WelcomePage;
    pages: Array<MenuItem>;
    openMenuGroup: MenuItem;
    
    completedLessons: Array<MenuItem>;

    constructor(
        private app: IonicApp,
        private platform: Platform,
        private menu: MenuController,
        private progress: ProgressProvider,
        private events: Events,
        private content: ContentData
    ) {
        this.initializeApp();
        
        this.completedLessons = progress.getCompletedLessons();
        
        console.log("Get content");
        // set our app's pages
        //this.pages = progress.getCourseContent();
            this.pages = [
        new MenuItem('Home', 0, 0, null),
        //Project
        new MenuItem('Your GPA - Is It Fair?', 1, 0, [
            //Session
            new MenuItem('Introduction', 1, 1, null, [
                //Pages
                new ContentItem('intro', 'Introduction', ContentPage),
                new ContentItem('objectives', 'Objectives', ContentPage),
                new ContentItem('assignment', 'Assignment', ContentPage),
                new ContentItem('pre-test', 'Pre-Test', AnswerQuestionPage)
            ]),
            new MenuItem('Income and GPA', 1, 2, null, [
                //Page
                new ContentItem('introduction', 'Introduction', AnswerQuestionPage),
                new ContentItem('average-earnings', 'Average Annual Earnings', QuestionPeerReviewPage),
                new ContentItem('budget-excercise', 'Budget Excercise', ActivityTablePage),
                new ContentItem('conclusion', 'Conclusion', AnswerQuestionPage),
            ]),
            new MenuItem('How To Calculate GPA', 1, 3, null, [
                //Page
                new ContentItem('introduction', 'Introduction', AnswerQuestionPage),
                new ContentItem('what-is-gpa', 'What is GPA', ContentPage),
                new ContentItem('calculating-gpa', 'Calculating GPA', ContentPage),
                new ContentItem('calculate-excercise', 'Excercise', ContentPage),
                new ContentItem('cleaver-high', 'Cleaver High', ContentPage),
                new ContentItem('raising-gpa', 'Raising Your GPA', ContentPage),
                new ContentItem('discussion', 'Discussion', AnswerQuestionPage)
            ]),                
            new MenuItem('Graphing Quartiles', 1, 4, null, 
            [
                new ContentItem('introduction', 'Introduction', ContentPage),
                new ContentItem('discussion', 'Discussion', AnswerQuestionPage),
                new ContentItem('why-box-plots', 'Why Box Plots', ContentPage),
                new ContentItem('how-to-create', 'Creating Plots', ContentPage),
                new ContentItem('excercise', 'Excercise', ContentPage)
            ]),
            new MenuItem('Assumptions Of GPA', 1, 5, null, [
                new ContentItem('introduction', 'Introduction', ContentPage),
                new ContentItem('types-of-measurement', 'Types of Measurement', ContentPage),
                new ContentItem('summarize-and-explain', 'Summarize and Explain', QuestionPeerReviewPage),
                new ContentItem('discussion', 'Discussion', AnswerQuestionPage),
            ]),
            new MenuItem('Graphing Interval Data', 1, 6, null, [
                new ContentItem('graphing-interval-data', 'Graphing interval data', AnswerQuestionPage),
                new ContentItem('how-to-create', 'Creating histogram', ContentPage),
                new ContentItem('discussion', 'Discussion', AnswerQuestionPage),
                new ContentItem('activity-page', 'Activity', ContentPage),
            ]),
            new MenuItem('Project Workshop', 1, 7, null, [
                new ContentItem('grading-scales', 'Grading scales', ContentPage),
                new ContentItem('questions', 'Discussion', AnswerQuestionPage),
                new ContentItem('brainstorm', 'Brainstorm ', AnswerQuestionPage),
            ]),
            new MenuItem('Presentations', 1, 8, null, [
                new ContentItem('provide-feedback', 'Provide feedback', ContentPage),
                new ContentItem('class-session-agenda', 'Class session agenda', ContentPage),
                new ContentItem('presentation-rubric', 'Presentation rubric', ContentPage),
                new ContentItem('post-test', 'Complete project post test', QuestionPeerReviewPage)
            ]),
            new MenuItem('Summary/Quiz', 1, 9, null, null),
        ]),
        new MenuItem('2: Is School Discipline Fair?', 2, 0, [
            new MenuItem('Introduction', 2, 1, null, [
                new ContentItem('intro-video', 'Introduction', ContentPage),
                new ContentItem('introduction', 'Introduction', ContentPage),
                new ContentItem('storyline', 'Story line', ContentPage),
                new ContentItem('project-statement', 'Project Statement ', ContentPage),
                new ContentItem('pre-test', 'Is School Discipline Fair?', AnswerQuestionPage)
            ]),
            new MenuItem('Representing Quantitive Data', 2, 2, null, [
                new ContentItem('intro-video', 'Experiencing', ContentPage),
                new ContentItem('class-discussion', 'Experiencing - class discussion', AnswerQuestionPage),
                new ContentItem('text-based-discussion', 'Text-Based Discussion Protocol', AnswerQuestionPage),
                new ContentItem('generalized-discussion', 'Generalizing - class discussion', AnswerQuestionPage),
            ]),
            new MenuItem('Analyzing Data - Mean', 2, 3, null, [
                new ContentItem('intro-video', 'Introduction', ContentPage),
                new ContentItem('processing-activity', 'Processing - activity', ContentPage),
                new ContentItem('generalized-discussion', 'Generalizing - class discussion', AnswerQuestionPage),
                new ContentItem('applying-activity', 'Applying: activity', ContentPage),
            ]),
            new MenuItem('Analyzing Data - Standard Deviation', 2, 4, null, [
                new ContentItem('experiencing', 'Experiencing', AnswerQuestionPage),
                new ContentItem('discussion', 'Processing - class discussion', AnswerQuestionPage),
                new ContentItem('generalizing-activity', 'Generalizing - activity', ContentPage),
                new ContentItem('applying-class-discussion', 'Applying class discussion', AnswerQuestionPage),
            ]),
            new MenuItem('Making Prediction About Data', 2, 5, null, [
                new ContentItem('experiencing', 'Experiencing - activity ', ContentPage),
                new ContentItem('processing-activity', 'Processing - activity', ContentPage),
                new ContentItem('activity', 'Activity', ContentPage),
                new ContentItem('generalizing', 'Generalizing', ContentPage),
                new ContentItem('discussion', 'Discussion', AnswerQuestionPage)
            ]),
            new MenuItem('Breaking the Cycle', 2, 6, null, [
                new ContentItem('experiencing', 'Experiencing - video', ContentPage),
                new ContentItem('processing-class-discussion', 'Processing class discussion', ContentPage),
                new ContentItem('generalizing', 'Generalizing', ContentPage),
                new ContentItem('applying-activity', 'Applying - activity', ContentPage)
            ]),
            new MenuItem('Lesson6', 2, 7, null, [
                new ContentItem('intro-video', 'Introduction', ContentPage),
                new ContentItem('experiencing', 'Experiencing', ContentPage),
                new ContentItem('processing-class-discussion', 'Processing class discussion', ContentPage),
                new ContentItem('generalizing', 'Generalizing', ContentPage),
                new ContentItem('end', 'What is standard deviation?', ContentPage)
            ]),
            new MenuItem('Lesson7', 2, 8, null, [
                new ContentItem('intro-video', 'Introduction', ContentPage),
                new ContentItem('experiencing', 'Experiencing: class discussion', AnswerQuestionPage),
                new ContentItem('processing', 'Processing class discussion', ContentPage),
                new ContentItem('generalizing', 'Generalizing', ContentPage),
                new ContentItem('applying', 'Appplying', ContentPage)
            ]),
            new MenuItem('Lesson8', 2, 9, null, [
                new ContentItem('intro-video', 'Introduction', ContentPage),
                new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
                new ContentItem('processing', 'Processing class discussion', ContentPage),
                new ContentItem('generalizing', 'Generalizing', ContentPage),
                new ContentItem('applying', 'Appplying', ContentPage)
            ]),
            new MenuItem('Lesson9', 2, 10, null, [
                new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
                new ContentItem('processing', 'Processing class discussion', ContentPage),
                new ContentItem('generalizing', 'Generalizing', ContentPage),
                new ContentItem('applying', 'Appplying', ContentPage)
            ]),
            new MenuItem('Lesson10', 2, 11, null, [
                new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
                new ContentItem('processing', 'Processing class discussion', ContentPage),
                new ContentItem('generalizing', 'Generalizing', ContentPage),
                new ContentItem('applying', 'Appplying', ContentPage)
            ]),
            new MenuItem('Lesson11', 2, 12, null, [
                new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
                new ContentItem('processing', 'Processing class discussion', ContentPage),
                new ContentItem('generalizing', 'Generalizing', ContentPage),
                new ContentItem('applying', 'Appplying', ContentPage),
                new ContentItem('post-test', 'Complete project post test', AnswerQuestionPage)
            ]),
            new MenuItem('Summary/Quiz', 2, 13, null, null),
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

        console.log("Got content");

        progress.setCourseContent(this.pages);
        
        this.setupMenuNodes();
        console.log("Setup content");
        
        events.subscribe('lesson:complete', (lesson) => {
            lesson[0].isComplete = true;
        });
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
            if (this.completedLessons.indexOf(node.children[i])> -1)
            {
                node.children[i].isComplete = true;
            }
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
        var firstContentPage = page.pages[0];
        this.progress.openPage(firstContentPage);
        
        this.nav.setRoot(firstContentPage.componentType, { item: firstContentPage });
    }
    showChildren(item) {
        if (item.children) {
            if (this.openMenuGroup == item) {
                this.openMenuGroup = null;
            } else {
                this.openMenuGroup = item;
            }
        } else {
            this.menu.close();
            this.nav.setRoot(WelcomePage);
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

}

