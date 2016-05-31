import {Injectable, Inject, OnInit} from '@angular/core';
import {ContentItem} from '../models/content-item';
import {MenuItem} from '../models/menu-item';
import {Events} from 'ionic-angular';

import {ContentPage} from '../pages/content-page/content-page';
// import {AnswerQuestionPage} from '../pages/answer-question-page/answer-question-page';
// import {ActivityTablePage} from '../pages/activity-table-page/activity-table-page';
// import {QuestionPeerReviewPage} from '../pages/question-peer-review-page/question-peer-review-page';


@Injectable()
export class ProgressProvider implements OnInit {

  private completedLessons: Array<MenuItem>;
  private lastPageOpened: ContentItem; 
  private pages: Array<MenuItem>;
  private startFrom: MenuItem;
  
  constructor(private events: Events) {
    this.completedLessons = new Array<MenuItem>();
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
      this.lastPageOpened = page;
  }
  completeLesson(lesson: MenuItem){
      this.completedLessons.push(lesson);
      this.lastPageOpened = this.findNextLesson(lesson).pages[0];
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