import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';


import {HttpModule} from "@angular/http";
import { COMPILER_PROVIDERS } from '@angular/compiler';


import { ActivityTablePage } from '../pages/activity-table-page/activity-table-page';
import { AnswerQuestionPage } from '../pages/answer-question-page/answer-question-page';
import { ContentPage } from '../pages/content-page/content-page';
import { CourseIndexPage } from '../pages/course-index-page/course-index-page';
import { DiscussionPage } from '../pages/discussion-page/discussion-page';
import { ForgotPassword } from '../pages/forgot-password-page/forgot-password-page';
import { LoginPage } from '../pages/login-page/login-page';
import { MainPage } from '../pages/main-page/main-page';
import { MyAssigmentsPage } from '../pages/my-assignments-page/my-assignments-page';
import { MyNotesPage } from '../pages/my-notes-page/my-notes-page';
import { NotePopup } from '../pages/note/note-popup';
import { PollingPage } from '../pages/polling-page/polling-page';
import { QuestionPeerReviewPage } from '../pages/question-peer-review-page/question-peer-review-page';
import { TeacherPage } from '../pages/teacher-page/teacher-page';
import { WelcomePage } from '../pages/welcome-page/welcome-page';

import { Animation } from '../components/animation/animation';
import { CharacterPhraseImg } from '../components/character-phrase-img/character-phrase-img';
import { InnerContent } from '../components/inner-content/inner-content';

import { ContentData } from '../providers/contentProvider';
import { ProgressProvider } from '../providers/progressProvider';

import {UserService} from "../services/userService"
import {ChannelService, SignalrWindow } from "../services/channelService"
import {ModalService} from "../services/modalService"
import {TeacherPageService} from "../services/teacherPageService"
import {ToastService} from "../services/toastService"
import {ApiService} from "../services/apiService"
import {Globals} from "./globals"

import { routing, appRouterProviders } from './routes';

import {LocationStrategy, HashLocationStrategy } from '@angular/common';
import {DynamicComponentModule} from "angular2-dynamic-component";

@NgModule({
  declarations: [
    MyApp,
    ActivityTablePage,
    AnswerQuestionPage,
    ContentPage,
    CourseIndexPage,
    DiscussionPage,
    ForgotPassword,
    LoginPage,
    MainPage,
    MyAssigmentsPage,
    MyNotesPage,
    NotePopup,
    PollingPage,
    QuestionPeerReviewPage,
    TeacherPage,
    WelcomePage,

    Animation,
    CharacterPhraseImg,
    InnerContent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    DynamicComponentModule,
    routing
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActivityTablePage,
    AnswerQuestionPage,
    ContentPage,
    CourseIndexPage,
    DiscussionPage,
    ForgotPassword,
    LoginPage,
    MainPage,
    MyAssigmentsPage,
    MyNotesPage,
    NotePopup,
    PollingPage,
    QuestionPeerReviewPage,
    TeacherPage,
    WelcomePage
  ],
  providers: [
    COMPILER_PROVIDERS,

    UserService,
    appRouterProviders,
    HttpModule,
    ContentData,
    ProgressProvider,
    ChannelService,
    ModalService,
    TeacherPageService,
    ToastService,
    ApiService,
    Globals,

    {provide: LocationStrategy, useClass: HashLocationStrategy},
    {provide: SignalrWindow, useValue: window}
  ]
})
export class AppModule {}
