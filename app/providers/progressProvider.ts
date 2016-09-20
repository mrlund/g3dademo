import {Injectable, Inject, OnInit, ViewChild} from '@angular/core';
import {ContentItem} from '../models/content-item';
import {MenuItem} from '../models/menu-item';
import {Events, ToastController, App, NavController} from 'ionic-angular';
import {Headers, Http} from "@angular/http";
import {BehaviorSubject} from "rxjs/Rx";
import {Globals} from "../globals";
import {WelcomePage} from "../pages/welcome-page/welcome-page";

@Injectable()
export class ProgressProvider {

    @ViewChild('rootNavController') nav: NavController;
  private completedLessons: Array<MenuItem>;
  private lastPageOpened:BehaviorSubject<ContentItem> = new BehaviorSubject<ContentItem>(null);
  private pages: Array<MenuItem>;
  private startFrom: MenuItem;
  private isLoggedIn: boolean = false;
  private baseUrl: string = "https://girlsinc.azurewebsites.net"; // "http://localhost:26209"; //

  constructor(private events: Events,
              private app: App,
              private http: Http,
              private _globals: Globals) {
    this._globals.isLoggedIn.subscribe(value => {
        this.isLoggedIn = value;
        this.completedLessons = new Array<MenuItem>();

        if(value) {
            this.getApiProgress().subscribe(res => {
                let parsedRes = res.json();
                let continueFrom = parsedRes['ContinueFrom'];
                let page = continueFrom['Page'];
                let project = continueFrom['Project'];
                let session = continueFrom['Session'];
                this.lastPageOpened.next(this.findLastOpenedPage(page, project, session));
            });
        }
    });
  }
  setCourseContent(pages: Array<MenuItem>){
      this.pages = pages;
  }
  getCourseContent(): Array<MenuItem>{
      return this.pages;
  }
  openPage(page: ContentItem){
      if(this.isLoggedIn){
          let menuItem = page['menuItem'];
          let data = {
              "Project": menuItem['project'],
              "Session": menuItem['session'] > 0 ? menuItem['session'] : 0,
              "Page": page.page //menuItem['page'] > 0 ? menuItem['page']-1 : 0
          };
          let token = localStorage.getItem("api_token");
          let headers = new Headers();
          headers.append('Authorization', 'Bearer ' + token);
          //get data of userprofile
          this.http.post(this.baseUrl + '/api/progress', data, {headers: headers}).subscribe(res => {
              this.lastPageOpened.next(page);
          });
          this._globals.setCurrentPage({project: data.Project, session: data.Session, page: data.Page});
      } else {
          this.lastPageOpened.next(page);
      }
  }
  saveNote(noteData) {
      let token = localStorage.getItem("api_token");
      let headers = new Headers();
      headers.append('Authorization', 'Bearer ' + token);
      return this.http.post(this.baseUrl + '/api/notes', noteData, {headers: headers});
  }
  completeLesson(lesson: MenuItem){
      if(this.isLoggedIn){
          this.completedLessons.push(lesson);
          this.lastPageOpened.next(this.findNextLesson(lesson).pages[0]);
          this.events.publish('lesson:complete', lesson);
      } else {
          this.lastPageOpened.next(this.findNextLesson(lesson).pages[0]); // after completing of lesson lastPageOpened will be first page of next lesson
      }
  }
  finishSession(lesson:any){
      this.completeLesson(lesson);

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

  getApiProgress(): any {
    let token = localStorage.getItem("api_token");
    let headers = new Headers();
    headers.append('Authorization', 'Bearer ' + token);
    return this.http.get(this.baseUrl + '/api/progress', {headers: headers});
  }
  getFirstLesson(){
      return this.pages[1].children[0].pages[0];
  }
  getPageByParams(project: number, session: number, page: number){
      var session = session >= 1 ? session-1 : 0;
      var page = page >= 1 ? page-1 : 0;
      return this.pages[project].children[session].pages[page];
  }
  findLastOpenedPage(Page : number, Project: number, Session: number){
      let currentProject = this.pages[Project];
      let currentSession = currentProject.children[Session - 1];
      let currentPage = currentSession.pages[Page - 1];
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