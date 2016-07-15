import {App, Platform, MenuController, Nav} from 'ionic-angular';
import {ViewChild, Component, OnInit, provide} from '@angular/core';
import {Events} from 'ionic-angular';
import {Observable} from "rxjs/Observable";

import {ProgressProvider} from '../../providers/progressProvider';
import {ContentData} from '../../providers/contentProvider';

import {WelcomePage} from '../welcome-page/welcome-page';
import {ContentPage} from '../content-page/content-page';
import {AnswerQuestionPage} from '../answer-question-page/answer-question-page';
import {ActivityTablePage} from '../activity-table-page/activity-table-page';
import {QuestionPeerReviewPage} from '../question-peer-review-page/question-peer-review-page';
import {CourseIndexPage} from '../course-index-page/course-index-page';
import {TeacherPage} from '../teacher-page/teacher-page';

import {MenuItem} from '../../models/menu-item';
import {ContentItem} from '../../models/content-item';

import {ChannelService, ChannelConfig, SignalrWindow} from '../../services/channelService';
import {UserService} from '../../services/userService';

let channelConfig = new ChannelConfig();
channelConfig.url = "http://girlsinc.azurewebsites.net/signalr";
channelConfig.hubName = "inClassHub";

@Component({
  templateUrl: 'build/pages/main-page/main-page.html',
})
export class MainPage implements OnInit{
  // make HelloIonicPage the root (or first) page
  @ViewChild(Nav) nav: Nav;
  rootPage: any = WelcomePage;
  pages: Array<MenuItem>;
  openMenuGroup: MenuItem;
  completedLessons: Array<MenuItem>;
  connectionState$: Observable<string>;

  constructor(
      private app: App,
      private platform: Platform,
      private menu: MenuController,
      private progress: ProgressProvider,
      private events: Events,
      private content: ContentData,
      private channelService: ChannelService,
      private userService: UserService
  ) {
    //this.connectionState$ = this.channelService.connectionState$.map((state: ConnectionState) => { return ConnectionState[state]; });
    this.channelService.error$.subscribe(
        (error: any) => { console.warn(error); },
        (error: any) => { console.error("errors$ error", error); }
    );
    // Wire up a handler for the starting$ observable to log the
    //  success/fail result
    //
    this.channelService.starting$.subscribe(
        () => { console.log("signalr service has been started"); },
        () => { console.warn("signalr service failed to start!"); }
    );

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
          new ContentItem('presentation-rubric', 'Presentation rubric', ContentPage)

        ]),
        new MenuItem('Summary/Quiz', 1, 9, null, [
          new ContentItem('post-test', 'Complete project post test', QuestionPeerReviewPage)
        ])
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
        new MenuItem('Analyzing Data: Interquartile Range', 2, 5, null, [
          new ContentItem('experiencing', 'Experiencing - activity ', ContentPage),
          new ContentItem('processing-activity', 'Processing - activity', ContentPage),
          new ContentItem('activity', 'Activity', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('discussion', 'Discussion', AnswerQuestionPage)
        ]),
        new MenuItem('Analyzing Data: Normal Distribution', 2, 6, null, [
          new ContentItem('experiencing', 'Experiencing - video', ContentPage),
          new ContentItem('processing-class-discussion', 'Processing class discussion', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying-activity', 'Applying - activity', ContentPage)
        ]),
        //new MenuItem('Analyzing Data - Standard Deviation', 2, 4, null, [
        //    new ContentItem('experiencing', 'Experiencing', AnswerQuestionPage),
        //    new ContentItem('discussion', 'Processing - class discussion', AnswerQuestionPage),
        //    new ContentItem('generalizing-activity', 'Generalizing - activity', ContentPage),
        //    new ContentItem('applying-class-discussion', 'Applying class discussion', AnswerQuestionPage),
        //]),
        new MenuItem('Analyzing Data - Standard Deviation', 2, 7, null, [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new ContentItem('processing-class-discussion', 'Processing class discussion', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('end', 'What is standard deviation?', ContentPage)
        ]),
        new MenuItem('Making Predictions About Data', 2, 8, null, [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Experiencing: class discussion', AnswerQuestionPage),
          new ContentItem('processing', 'Processing class discussion', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Appplying', ContentPage)
        ]),
        new MenuItem('Breaking The Cycle', 2, 9, null, [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
          new ContentItem('processing', 'Processing class discussion', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Appplying', ContentPage)
        ]),
        new MenuItem('Project Workshop', 2, 10, null, [
          new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
          new ContentItem('processing', 'Processing class discussion', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Appplying', ContentPage)
        ]),
        //new MenuItem('Lesson10', 2, 11, null, [
        //    new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
        //    new ContentItem('processing', 'Processing class discussion', ContentPage),
        //    new ContentItem('generalizing', 'Generalizing', ContentPage),
        //    new ContentItem('applying', 'Appplying', ContentPage)
        //]),
        new MenuItem('Project Presentation', 2, 12, null, [
          new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
          new ContentItem('processing', 'Processing class discussion', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Appplying', ContentPage)
        ]),
        new MenuItem('Summary/Quiz', 2, 13, null, [
          new ContentItem('post-test', 'Complete project post test', AnswerQuestionPage)
        ])
      ]),
      new MenuItem('3: Shoplifting', 3, 0, [
        new MenuItem('Project Introduction', 3, 1, null, [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('introduction', 'Introduction', ContentPage),
          new ContentItem('storyline', 'Story line', ContentPage),
          new ContentItem('project-statement', 'Project title Project Statement', ContentPage),
          new ContentItem('pre-test', 'Shoplifting', AnswerQuestionPage)
        ]),
        new MenuItem('Data Distribution - Shape', 3, 2, null, [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new ContentItem('processing', 'Processing', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Appplying', ContentPage)
        ]),
        new MenuItem('Determining Outliers In Data', 3, 3, null, [
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new ContentItem('processing', 'Processing', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Appplying', ContentPage)
        ]),
        new MenuItem('Analyzing the Impact of Outliers', 3, 4, null, [
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new ContentItem('processing', 'Processing', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Appplying', AnswerQuestionPage)
        ]),
        new MenuItem('Project Workshop', 3, 5, null, [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
          new ContentItem('processing', 'Processing class discussion', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', AnswerQuestionPage),
          new ContentItem('applying', 'Appplying', AnswerQuestionPage)
        ]),
        new MenuItem('Project Presentation', 3, 6, null, [
          new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
          new ContentItem('processing', 'Processing class discussion', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Appplying', ContentPage)
        ]),
        new MenuItem('Summary/Quiz', 3, 7, null, [
          new ContentItem('post-test', 'Complete project post test', AnswerQuestionPage)
        ])
      ]),
      new MenuItem('4: Cell Phone Usage', 4, 0, [
        new MenuItem('Introduction', 4, 1, null,  [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('introduction', 'Introduction', ContentPage),
          new ContentItem('storyline', 'Story line', ContentPage),
          new ContentItem('project-statement', 'Project Statement ', ContentPage),
          new ContentItem('pre-test', 'Is School Discipline Fair?', AnswerQuestionPage)
        ]),
        new MenuItem('Unobtrusive Measures', 4, 2, null, [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new ContentItem('video', 'Video', ContentPage),
          new ContentItem('processing', 'Processing class discussion', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Appplying', AnswerQuestionPage)
        ]),
        new MenuItem('Data Representation: Tables and Charts', 4, 3, null, [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new ContentItem('processing', 'Processing', ContentPage),
          new ContentItem('table45', 'Table 45', ContentPage),
          new ContentItem('generalizing', 'Class discussion', ContentPage),
          new ContentItem('applying', 'Appplying', ContentPage)
        ]),
        new MenuItem('Two Way Frequency Tables', 4, 4, null, [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Experiencing', AnswerQuestionPage),
          new ContentItem('processing', 'Processing', ContentPage),
          new ContentItem('table45', 'Table 45', ContentPage),
          new ContentItem('generalizing', 'Class discussion', QuestionPeerReviewPage),
          new ContentItem('applying', 'Appplying', ContentPage)
        ]),
        new MenuItem('Project workshop', 4, 5, null, [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new ContentItem('data', 'Data', ContentPage),
          new ContentItem('processing', 'Processing', ContentPage),
          new ContentItem('generalizing', 'Class discussion', ContentPage),
          new ContentItem('applying', 'Appplying', ContentPage)
        ]),
        new MenuItem('Project Presentations', 4, 6, null, [
          new ContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Class session agenda', ContentPage),
          new ContentItem('presentation1', ' ', ContentPage),
          new ContentItem('presentation2', ' ', ContentPage)
        ]),
        new MenuItem('Summary/Quiz', 4, 7, null, [
          new ContentItem('post-test', 'Complete project post test', AnswerQuestionPage)
        ])
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
  showIndex(){
    this.menu.close();
    this.nav.setRoot(CourseIndexPage);
  }
  showTeacherPage(){
    this.menu.close();
    this.nav.setRoot(TeacherPage);
  }
  logout(){
    this.menu.close();
    this.userService.logout();
  }
  ngOnInit() {
    // Start the connection up!
    console.log("Starting the channel service");
    this.channelService.start();
  }
}