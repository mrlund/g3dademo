import {Injectable, Inject, OnInit} from '@angular/core';
import {ContentItem} from '../models/content-item';
import {MenuItem} from '../models/menu-item';
import {Events} from 'ionic-angular';

import {ContentPage} from '../pages/content-page/content-page';
import {Headers, Http} from "@angular/http";
import {BehaviorSubject} from "rxjs/Rx";
// import {AnswerQuestionPage} from '../pages/answer-question-page/answer-question-page';
// import {ActivityTablePage} from '../pages/activity-table-page/activity-table-page';
// import {QuestionPeerReviewPage} from '../pages/question-peer-review-page/question-peer-review-page';


@Injectable()
export class ProgressProvider implements OnInit {

  private completedLessons: Array<MenuItem>;
  private lastPageOpened:BehaviorSubject<ContentItem> = new BehaviorSubject<ContentItem>(null);
  private pages: Array<MenuItem>;
  private startFrom: MenuItem;
  
  constructor(private events: Events, private http: Http) {
    this.completedLessons = new Array<MenuItem>();
    let token = localStorage.getItem("api_token");
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    //get data of userprofile
    this.http.get('/app-api' + '/api/progress', {headers: headers}).subscribe(res => {
        let parsedRes = res.json();
        let continueFrom = parsedRes['ContinueFrom'];
        let page = continueFrom['Page'];
        let project = continueFrom['Project'];
        let session = continueFrom['Session'];
        this.lastPageOpened.next(this.findLastOpenedPage(page, project, session));
    });
  }

  ngOnInit(){
  }
  setCourseContent(pages: Array<MenuItem>){
      this.pages = pages;
  }
  getCourseContent(): Array<MenuItem>{
      return this.pages;
  }
  openPage(page: ContentItem){
      let menuItem = page['menuItem'];
      let data = {
          "Project": menuItem['project'],
          "Session": menuItem['session'] > 0 ? menuItem['session']-1 : 0,
          "Page": menuItem['page'] > 0 ? menuItem['page']-1 : 0
      };
      let token = localStorage.getItem("api_token");
      let headers = new Headers();
      headers.append('Authorization', 'Bearer ' + token);
      //get data of userprofile
      this.http.post('/app-api' + '/api/progress', data, {headers: headers}).subscribe(res => {
          this.lastPageOpened.next(page);
      });
  }
  completeLesson(lesson: MenuItem){
      this.completedLessons.push(lesson);
      this.lastPageOpened.next(this.findNextLesson(lesson).pages[0]);
      this.events.publish('lesson:complete', lesson);
  }
  isComplete(lesson: MenuItem){
      return this.completedLessons.indexOf(lesson) > -1;
  }
  getLastPage(){
      return this.lastPageOpened;
  }
  getCompletedLessons() : Array<MenuItem> {
      return this.completedLessons;
  }
  getFirstLesson(){
      return this.pages[1].children[0].pages[0];
  }
  findLastOpenedPage(Page : number, Project: number, Session: number){
      let currentProject = this.pages[Project];
      let currentSession = currentProject.children[Session];
      let currentPage = currentSession.pages[Page];
      return currentPage;
  }
  findNextLesson(lesson: MenuItem){
      let nextLesson: MenuItem;
      this.pages.forEach((project, index) => {
          if (project.children)
          {
            let lessonNo = project.children.indexOf(lesson);
            if (lessonNo > -1)
            {
                if (lessonNo == project.children.length - 1)
                {
                    //Last lesson. Get next project.
                    if (this.pages.length > index)
                    {
                        nextLesson = this.pages[index+1].children[0]  
                    }
                    
                } else {
                    nextLesson = project.children[lessonNo + 1];
                }

            }              
          }
      });
      return nextLesson;
  }

}