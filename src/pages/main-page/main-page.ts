import {App, Platform, MenuController, Nav, ToastController} from 'ionic-angular';
import {ViewChild, Component, OnInit} from '@angular/core';
import {Events} from 'ionic-angular';

import {ProgressProvider} from '../../providers/progressProvider';
import {ContentData} from '../../providers/contentProvider';

import {WelcomePage} from '../welcome-page/welcome-page';
import {ContentPage} from '../content-page/content-page';
import {PollingPage} from '../polling-page/polling-page';
import {AnswerQuestionPage} from '../answer-question-page/answer-question-page';
import {ActivityTablePage} from '../activity-table-page/activity-table-page';
import {QuestionPeerReviewPage} from '../question-peer-review-page/question-peer-review-page';
import {CourseIndexPage} from '../course-index-page/course-index-page';

import {MenuItem} from '../../models/menu-item';
import {ContentItem, AnimationContentItem} from '../../models/content-item';

import {ChannelService} from '../../services/channelService';
import {UserService} from '../../services/userService';
import {TeacherPageService} from '../../services/teacherPageService';
import {Globals} from '../../app/globals';
import {MyAssigmentsPage} from "../my-assignments-page/my-assignments-page";
import {MyNotesPage} from "../my-notes-page/my-notes-page";
import {Subscription} from "rxjs/Subscription";

@Component({
  templateUrl: 'main-page.html',
  selector : 'main-page-cmp'
})
export class MainPage implements OnInit{
  public static SELECTED_COURSE_NONE: string = 'None';

  // make HelloIonicPage the root (or first) page
  @ViewChild(Nav) nav: Nav;
  rootPage: any = WelcomePage;
  pages: Array<MenuItem>;
  openMenuGroup: MenuItem;
  completedLessons: Array<MenuItem>;
  // connectionState$: Observable<string>;
  isLoggedIn: boolean = false;
  userData: Map<string, string>;
  currentPage: any = null;
  classroomMode: boolean = false;
  connectAttempts: number = 0;

  classroomModeSub: Subscription;
  debounceSub: Subscription;
  channelServiceSub: Subscription;
  pageSyncSub: Subscription;

    constructor(
      public app: App,
      public platform: Platform,
      public menu: MenuController,
      public progress: ProgressProvider,
      public events: Events,
      public content: ContentData,
      public channelService: ChannelService,
      public userService: UserService,
      public teacherPageService: TeacherPageService,
      public _globals: Globals,
      public toastController: ToastController
  ) {
    this.classroomModeSub = _globals.isLoggedIn.subscribe(value => {
      this.isLoggedIn = value;
      if(value){
        this.userService.updateUserInfo(()=>{
          this.userData = userService.getUserData();
          this.progress.updateContinueFromData(this.userData['ContinueFrom']);
          this.loadCompletedLessons();
        });
      }
    });
    //this.connectionState$ = this.channelService.connectionState$.map((state: ConnectionState) => { return ConnectionState[state]; });
    this.debounceSub = this.channelService.error$.debounceTime(500).subscribe(
        (error: any) => {
          console.warn(error);
          if (this.connectAttempts++ < 10){
            console.log("Reconnecting");
            this.startHubChannel();
          }
        },
        (error: any) => { console.error("errors$ error", error); }
    );
    // Wire up a handler for the starting$ observable to log the
    //  success/fail result
    //
    this.channelServiceSub =  this.channelService.starting$.subscribe(
        () => { console.log("signalr service has been started"); },
        () => { console.warn("signalr service failed to start!"); }
    );

    this.userData = userService.getUserData();

    this.installClassroomModeValue(this.userData['IsFacilitator']);
    this.setupSelectedCourse();

    this.completedLessons = progress.getCompletedLessons();
    console.log("Get content");
    // set our app's pages
    //this.pages = progress.getCourseContent();
    this.pages = [
      new MenuItem('Home', 0, 0, null),
      //Project
      new MenuItem('1: Your GPA - Is It Fair?', 1, 0, [
        //Session
        new MenuItem('Introduction', 1, 1, null, [
          //Pages
          new ContentItem('meet-the-giga-girls', 'Meet the Giga Girls!', ContentPage),
          new AnimationContentItem('intro', 'Introduction', ContentPage, 'p1s1'),
          new ContentItem('objectives', 'Project Roadmap', ContentPage),
          new ContentItem('assignment', 'Assignment', ContentPage),
          new ContentItem('poll', 'What do you think?', PollingPage),
          new ContentItem('pre-test', 'What do you know?', AnswerQuestionPage)
        ]),
        new MenuItem('Income and GPA', 1, 2, null, [
          //Page
          new ContentItem('roadmap', 'Session Roadmap', ContentPage),
          new ContentItem('introduction', 'Introduction', AnswerQuestionPage),
          new AnimationContentItem('why-higher-ed', 'Why Higher Ed', ContentPage, 'p1s2'),
          new ContentItem('average-earnings', 'Average Annual Earnings', QuestionPeerReviewPage),
          new ContentItem('budget-excercise', 'Budget Excercise', ActivityTablePage),
          new ContentItem('conclusion', 'Conclusion', AnswerQuestionPage),
          new ContentItem('poll', 'What do you think?', PollingPage),
        ]),
        new MenuItem('How To Calculate GPA', 1, 3, null, [
          //Page
          new ContentItem('roadmap', 'Session Roadmap', ContentPage),
          new ContentItem('introduction', 'Introduction', AnswerQuestionPage),
          new AnimationContentItem('what-is-gpa', 'What is GPA', ContentPage, 'p1s3'),
          new ContentItem('calculating-gpa', 'Calculating GPA', ContentPage),
          new ContentItem('calculate-excercise', 'Excercise', ContentPage),
          new ContentItem('cleaver-high', 'Cleaver High', ContentPage),
          new ContentItem('raising-gpa', 'Raising Your GPA', ContentPage),
          new ContentItem('discussion', 'Discussion', AnswerQuestionPage),
          new ContentItem('poll', 'What do you think?', PollingPage),
        ]),
        new MenuItem('Graphing Quartiles', 1, 4, null, [
              new ContentItem('roadmap', 'Session Roadmap', ContentPage),
              new AnimationContentItem('introduction', 'Introduction', ContentPage, 'p1s4'),
              new ContentItem('discussion', 'Discussion', AnswerQuestionPage),
              new AnimationContentItem('why-box-plots', 'Why Box Plots', ContentPage),
              new ContentItem('how-to-create', 'Creating Plots', ContentPage),
              new ContentItem('how-to-discussion', 'Discussion', AnswerQuestionPage),
              new ContentItem('excercise', 'Excercise', ContentPage),
              new ContentItem('poll', 'What do you think?', PollingPage),
        ]),
        new MenuItem('Assumptions Of GPA', 1, 5, null, [
          new ContentItem('roadmap', 'Session Roadmap', ContentPage),
          new AnimationContentItem('introduction', 'Introduction', ContentPage, 'p1s5'),
          new ContentItem('summarize-and-explain', 'Summarize and Explain', QuestionPeerReviewPage),
          new ContentItem('discussion', 'Discussion', AnswerQuestionPage),
          new ContentItem('graphing-videos', 'Graphing Videos', ContentPage),
          new ContentItem('graphing', 'Graphing in Excel', ContentPage),
          new ContentItem('poll', 'What do you think?', PollingPage),
        ]),
        new MenuItem('Graphing Interval Data', 1, 6, null, [
          new AnimationContentItem('introduction', 'Introduction', ContentPage, 'p1s6'),
          new ContentItem('graphing-interval-data', 'Graphing interval data', AnswerQuestionPage),
          new ContentItem('review-types-of-data', 'Review Types of Data', AnswerQuestionPage),
          new AnimationContentItem('how-to-create', 'Creating histogram', ContentPage),
          new ContentItem('discussion', 'Discussion', AnswerQuestionPage),
          new ContentItem('activity-page', 'Activity', ContentPage),
          new ContentItem('poll', 'What do you think?', PollingPage),
        ]),
        new MenuItem('Is GPA a fair use of Data?', 1, 7, null, [
          new AnimationContentItem('grading-scales', 'Grading scales', ContentPage, 'p1s7'),
          new ContentItem('questions', 'Discussion', AnswerQuestionPage),
          new ContentItem('brainstorm', 'Brainstorm ', AnswerQuestionPage),
          new ContentItem('begin', 'Making a presentation', ContentPage),
          new ContentItem('presenting', 'Giving a presentation', ContentPage)
        ]),
        new MenuItem('Presentations', 1, 8, null, [
          new ContentItem('roadmap', 'Session Roadmap', ContentPage),
          new ContentItem('class-session-agenda', 'Class session agenda', ContentPage),
          new ContentItem('presentation-rubric', 'Presentation rubric', ContentPage),
          new ContentItem('evaluations', 'Evaluating Presentations', AnswerQuestionPage)
        ]),
        new MenuItem('Summary/Quiz', 1, 9, null, [
          new ContentItem('poll', 'What do you think?', PollingPage),
          new ContentItem('post-test', 'What have you learnt?', AnswerQuestionPage)
        ])
      ]),
      new MenuItem('2: Is School Discipline Fair?', 2, 0, [
        new MenuItem('Introduction', 2, 1, null, [
          new ContentItem('roadmap', 'Project Roadmap', ContentPage),
          new ContentItem('introduction', 'Introduction', ContentPage),
          new AnimationContentItem('storyline', 'Story line', ContentPage, 'p2s1'),
          new ContentItem('project-statement', 'Project Statement ', ContentPage),
          new ContentItem('poll', 'What do you think?', PollingPage),
          new ContentItem('pre-test', 'What do you know?', AnswerQuestionPage)
        ]),
        new MenuItem('Project Background', 2, 2, null, [
          new ContentItem('roadmap', 'Roadmap', ContentPage),
          new ContentItem('class-discussion', 'Experiencing - class discussion', AnswerQuestionPage),
          new ContentItem('text-based-discussion', 'Text-Based Discussion Protocol', AnswerQuestionPage),
          new ContentItem('poll', 'What do you think?', PollingPage),
          new ContentItem('generalized-discussion', 'Generalizing - class discussion', AnswerQuestionPage),
        ]),
        new MenuItem('Representing Quantitive Data', 2, 3, null, [
          new ContentItem('roadmap', 'Roadmap', ContentPage),
          new AnimationContentItem('intro-video', 'Experiencing', ContentPage, 'p2s3'),
          new ContentItem('processing-activity', 'Text-Based Discussion Protocol', ContentPage),
          new ContentItem('generalized-discussion', 'Experiencing - class discussion', AnswerQuestionPage),
          new ContentItem('applying-activity', 'Generalizing - Class Activity', ContentPage),
        ]),
        new MenuItem('Analyzing Data - Mean', 2, 4, null, [
          new ContentItem('roadmap', 'Roadmap', ContentPage),
          new AnimationContentItem('intro-video', 'Introduction', ContentPage, 'p2s4'),
          new ContentItem('experiencing', 'Experiencing', AnswerQuestionPage),
          new ContentItem('discussion', 'Discussion', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying-class-discussion', 'Applying', AnswerQuestionPage),
        ]),
        new MenuItem('Analyzing Data: Interquartile Range', 2, 5, null, [
          new ContentItem('roadmap', 'Roadmap', ContentPage),
          new AnimationContentItem('introduction', 'Introduction', ContentPage, 'p2s5'),
          new ContentItem('experiencing', 'Experiencing - activity ', AnswerQuestionPage),
          new ContentItem('processing-class-discussion', 'Processing - activity', ContentPage),
          new ContentItem('activity', 'Activity', ContentPage),
          new ContentItem('discussion', 'Discussion', AnswerQuestionPage)
        ]),
        new MenuItem('Analyzing Data: Normal Distribution', 2, 6, null, [
          new ContentItem('roadmap', 'Roadmap', ContentPage),
          new AnimationContentItem('introduction', 'Introduction', ContentPage, 'p2s6'),
          new ContentItem('experiencing', 'Experiencing - video', ContentPage),
          new ContentItem('processing-class-discussion', 'Processing class discussion', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('activity', 'Applying - activity', ContentPage)
        ]),
        new MenuItem('Analyzing Data - Standard Deviation', 2, 7, null, [
          new ContentItem('roadmap', 'Roadmap', ContentPage),
          new AnimationContentItem('introduction', 'Introduction', ContentPage, 'p2s7'),
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new ContentItem('end', 'What is standard deviation?', ContentPage),
          new ContentItem('processing-class-discussion', 'Processing class discussion', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Appplying', AnswerQuestionPage)
        ]),
        new MenuItem('Making Predictions About Data', 2, 8, null, [
          new ContentItem('roadmap', 'Roadmap', ContentPage),
          new ContentItem('experiencing', 'Experiencing: class discussion', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Applying', AnswerQuestionPage)
        ]),
        new MenuItem('Breaking The Cycle', 2, 9, null, [
          new ContentItem('roadmap', 'Roadmap', ContentPage),
          new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
          new ContentItem('processing', 'Processing class discussion', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Applying', ContentPage)
        ]),
        new MenuItem('Project Workshop', 2, 10, null, [
          new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
          new ContentItem('processing', 'Processing class discussion', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Applying', ContentPage)
        ]),
        new MenuItem('Project Presentation', 2, 11, null, [
          new ContentItem('roadmap', 'Session Roadmap', ContentPage),
          new ContentItem('class-session-agenda', 'Class session agenda', ContentPage),
          new ContentItem('presentation-rubric', 'Presentation rubric', ContentPage),
          new ContentItem('evaluations', 'Evaluating Presentations', AnswerQuestionPage)
        ]),
        new MenuItem('Summary/Quiz', 2, 12, null, [
          new ContentItem('post-test', 'What have you learnt?', AnswerQuestionPage),
          new ContentItem('poll', 'What do you think?', PollingPage),
          new ContentItem('curriculum-eval', 'How did we do?', PollingPage)

        ])
      ]),
      new MenuItem('3: Shoplifting', 3, 0, [
        new MenuItem('Project Introduction', 3, 1, null, [
          new AnimationContentItem('intro-video', 'Introduction', ContentPage, 'p3s1'),
          new ContentItem('introduction', 'Introduction', ContentPage),
          new ContentItem('project-statement', 'Project Statement', ContentPage),
          new ContentItem('pre-test', 'Shoplifting', AnswerQuestionPage)
        ]),
        new MenuItem('Data Distribution - Shape', 3, 2, null, [
          new AnimationContentItem('intro-video', 'Introduction', ContentPage, 'p3s2'),
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          // new ContentItem('processing', 'Processing', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Applying', ContentPage)
        ]),
        new MenuItem('Determining Outliers In Data', 3, 3, null, [
          new AnimationContentItem('intro-video', 'Introduction', ContentPage, 'p3s3'),
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new ContentItem('processing', 'Processing', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Applying', ContentPage)
        ]),
        new MenuItem('Analyzing the Impact of Outliers', 3, 4, null, [
          new AnimationContentItem('intro-video', 'Introduction', ContentPage, 'p3s4'),
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new ContentItem('processing', 'Processing', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Applying', AnswerQuestionPage)
        ]),
        new MenuItem('Project Workshop', 3, 5, null, [
          new AnimationContentItem('intro-video', 'Introduction', ContentPage, 'p3s5'),
          new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
          new ContentItem('processing', 'Processing class discussion', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', AnswerQuestionPage),
          new ContentItem('applying', 'Applying', AnswerQuestionPage)
        ]),
        new MenuItem('Project Presentation', 3, 6, null, [
          new ContentItem('experiencing', 'Experiencing: class discussion', ContentPage),
          new ContentItem('processing', 'Processing class discussion', ContentPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Applying', ContentPage)
        ]),
        new MenuItem('Summary/Quiz', 3, 7, null, [
          new ContentItem('post-test', 'Complete project post test', AnswerQuestionPage)
        ])
      ]),
      new MenuItem('4: Cell Phone Usage', 4, 0, [
        new MenuItem('Introduction', 4, 1, null,  [
          new AnimationContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('introduction', 'Introduction', ContentPage),
          new AnimationContentItem('storyline', 'Story line', ContentPage),
          new ContentItem('project-statement', 'Project Statement ', ContentPage),
          new ContentItem('pre-test', 'Is School Discipline Fair?', AnswerQuestionPage)
        ]),
        new MenuItem('Unobtrusive Measures', 4, 2, null, [
          new AnimationContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new AnimationContentItem('video', 'Video', ContentPage),
          new ContentItem('processing', 'Processing class discussion', AnswerQuestionPage),
          new ContentItem('generalizing', 'Generalizing', ContentPage),
          new ContentItem('applying', 'Appplying', AnswerQuestionPage)
        ]),
        new MenuItem('Data Representation: Tables and Charts', 4, 3, null, [
          new AnimationContentItem('intro-video', 'Introduction', ContentPage),
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
          new AnimationContentItem('intro-video', 'Introduction', ContentPage),
          new ContentItem('experiencing', 'Experiencing', ContentPage),
          new ContentItem('data', 'Data', ContentPage),
          new ContentItem('processing', 'Processing', ContentPage),
          new ContentItem('generalizing', 'Class discussion', ContentPage),
          new ContentItem('applying', 'Appplying', ContentPage)
        ]),
        new MenuItem('Project Presentations', 4, 6, null, [
          new AnimationContentItem('intro-video', 'Introduction', ContentPage),
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
      if(this.isLoggedIn) {
        lesson[0].isComplete = true;
        let toast = this.toastController.create({
          message: 'Congratulations - You completed the lesson!',
          duration: 3000
        });
        toast.onDidDismiss(() => {
          this.nav.setRoot(WelcomePage);
        });
        toast.present();
      }
    });

//    this.loadCompletedLessons();
  }
  installClassroomModeValue(IsFacilitator):void{
    this.classroomMode = IsFacilitator ? false : true; // classroom is on only for students
  }
  loadCompletedLessons() {
    let completedPages = this.userData['CompletedPages'];
    let completedPagesSet = new Map();
    if (completedPages) {
      for (let i = 0; i < completedPages.length; i++) {
        if (completedPages[i].ProjectNumber && completedPages[i].SessionNumber) {
          let projectNumber = completedPages[i].ProjectNumber;
          let sessionNumber = completedPages[i].SessionNumber;
          let pageNumber = completedPages[i].PageNumber;
          completedPagesSet.set(projectNumber + '_' + sessionNumber + '_' + pageNumber,
              {project: projectNumber, session: sessionNumber, page: pageNumber});
        }
      }
      completedPagesSet.forEach((page) => {
        var projectIndex = page['project'];
        this.setCompletedPages(this.pages[projectIndex].children, page['project'], page['session'], page['page']);
      });
    }
  }

  setCompletedPages(pages: Array<any>, projectNumber: number, sessionNumber: number, pageNumber: number) {
    for (let i = 0; i < pages.length; i++) {
      if (!pages[i].isComplete) {

        if (pages[i].children) {
          this.setCompletedPages(pages[i].children, projectNumber, sessionNumber, pageNumber);
          return;
        }
        if (pages[i].project == projectNumber && pages[i].session == sessionNumber && pages[i].pages && pages[i].pages.length == pageNumber) {
          pages[i].isComplete = true;
        }
      }
    }
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
    this._globals.clearCurrentPage();
    this.menu.close();
    this.nav.setRoot(CourseIndexPage);
  }
  logout(){
    this._globals.clearCurrentPage();
    this.menu.close();
    this.userService.logout();
  }
  login(){
    this.menu.close();
    this._globals.clearCurrentPage();
    this.userService.goToLogin();
  }
  ngOnInit() {
    // Start the connection up!
    this.startHubChannel();
    this.teacherPageService.startTimer(); //timer for clearing suggestions every hour

    this.pageSyncSub = this.channelService.getPageSyncData().subscribe((answer) => {
      console.log("Got sync page:", answer);
      if(!answer){
        return;
      }

      var project = answer.project;
      var session = answer.session;
      var pageNum = answer.page;

      var stack =[];

      var page = this.progress.getPageByParams( project, session, 1 );
      if(page) {
        stack.push({page: page.componentType, params: {item: page}});
        if (page.nextItem && page.page !== pageNum) {
          do {
            page = page.nextItem;
            stack.push({page: page.componentType, params: {item: page}});
          }
          while (page.nextItem && page.page !== pageNum);
          this.nav.setPages(stack, {animate: false});
        }
      }
    });
  }
  ngOnDestroy(){
    if(this.classroomModeSub) this.classroomModeSub.unsubscribe();
    if(this.debounceSub) this.debounceSub.unsubscribe();
    if(this.channelServiceSub) this.channelServiceSub.unsubscribe();
    if(this.pageSyncSub) this.pageSyncSub.unsubscribe();
  }
  startHubChannel(){
    console.log("Starting the channel service");
    this.channelService.start();
  }
  setupSelectedCourse() {
    if (this.userData['IsFacilitator'] && !this.userData['SelectedCourseId']) {
      this.userData['SelectedCourseId'] = this.userData['ClassesTaught'] && this.userData['ClassesTaught'].length ?
          this.userData['ClassesTaught'][0].CourseClassId : MainPage.SELECTED_COURSE_NONE;
      this.userService.setSelectedCourse(this.userData['SelectedCourseId']);
    }
  }
  changeSelectedCourse(){
    this.userService.setSelectedCourse(this.userData['SelectedCourseId']);
    this.startHubChannel();
  }
  onClassroomModeSwitch(classroomMode: boolean){
    this._globals.setClassroomModeStatus(classroomMode);
  }
  showMyAssignmentsPage(){
      this.menu.close();
      this.nav.setRoot(MyAssigmentsPage);
  }
  showMyNotesPage(){
      this.menu.close();
      this.nav.setRoot(MyNotesPage);
  }
}
