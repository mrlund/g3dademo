import {Injectable, ViewChild} from '@angular/core';
import {ContentItem} from '../models/content-item';
import {MenuItem} from '../models/menu-item';
import {Events, App, NavController} from 'ionic-angular';
import {Headers, Http, Response} from "@angular/http";
import {BehaviorSubject, Observable} from "rxjs/Rx";
import {Globals} from "../app/globals";
import {IContentItem} from  "../models/content-item"

@Injectable()
export class ProgressProvider {

    @ViewChild('rootNavController') nav: NavController;
    public completedLessons: Array<MenuItem>;
    public lastPageOpened: BehaviorSubject<ContentItem> = new BehaviorSubject<ContentItem>(null);
    public pages: Array<MenuItem>;
    public startFrom: MenuItem;
    public isLoggedIn: boolean = false;
    public baseUrl: string = "https://girlsinc.azurewebsites.net"; // "http://localhost:26209"; //

    constructor(public events: Events,
        public app: App,
        public http: Http,
        public _globals: Globals) {
        this._globals.isLoggedIn.subscribe(value => {
            this.isLoggedIn = value;
            this.completedLessons = new Array<MenuItem>();
        });
    }

    updateContinueFromData(data){
        let page = data['Page'];
        let project = data['Project'];
        let session = data['Session'];
        this.lastPageOpened.next(this.findLastOpenedPage(page, project, session));
    }

    setCourseContent(pages: Array<MenuItem>) {
        this.pages = pages;
    }
    getCourseContent(): Array<MenuItem> {
        return this.pages;
    }
    openPage(page: ContentItem) {
        if (this.isLoggedIn) {
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
            this.http.post(this.baseUrl + '/api/progress', data, { headers: headers }).subscribe(res => {
                this.lastPageOpened.next(page);
            });
            this._globals.setCurrentPage({ project: data.Project, session: data.Session, page: data.Page });
        } else {
            this.lastPageOpened.next(page);
        }
    }
    saveNote(noteData, isExist = false): Observable<Response> {
        let token = localStorage.getItem("api_token");
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        let request;
        if(!isExist) {
          request = this.http.post(this.baseUrl + '/api/notes', noteData, {headers: headers});
        } else {
          request = this.http.put(this.baseUrl + '/api/notes', noteData, {headers: headers});
        }
        return request;
    }
    completeLesson(lesson: MenuItem) {
        if (this.isLoggedIn) {
            this.completedLessons.push(lesson);
            let nextLesson = this.findNextLesson(lesson);
            if (nextLesson && nextLesson.pages) {
                this.lastPageOpened.next(nextLesson.pages[0]);
            }
            this.events.publish('lesson:complete', lesson);
        } else {
            let nextLesson = this.findNextLesson(lesson);
            if (nextLesson && nextLesson.pages) {
                this.lastPageOpened.next(nextLesson.pages[0]); // after completing of lesson lastPageOpened will be first page of next lesson
            }
        }
    }
    finishSession(lesson: any) {
        this.completeLesson(lesson);

    }
    isComplete(lesson: MenuItem) {
        return this.completedLessons.indexOf(lesson) > -1;
    }
    getLastPage() {
        return this.lastPageOpened;
    }
    getCompletedLessons(): Array<MenuItem> {
        return this.completedLessons;
    }

    getApiProgress(): any {
        let token = localStorage.getItem("api_token");
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return this.http.get(this.baseUrl + '/api/progress', { headers: headers });
    }
    getFirstLesson():IContentItem {
        return this.pages[1].children[0].pages[0];
    }
    getPageByParams(project: number, session: number, page: number) {
        var session = session >= 1 ? session - 1 : 0;
        var page = page >= 1 ? page - 1 : 0;
        return this.pages[project].children[session].pages[page];
    }
    findLastOpenedPage(Page: number, Project: number, Session: number) {
        let currentProject = this.pages[Project];
        let currentSession = currentProject.children[Session - 1];
        let currentPage = currentSession.pages[Page - 1];
        return currentPage;
    }
    findNextLesson(lesson: MenuItem) {
        let nextLesson: MenuItem;
        this.pages.forEach((project, index) => {
            if (project.children) {
                let lessonNo = project.children.indexOf(lesson);
                if (lessonNo > -1) {
                    if (lessonNo == project.children.length - 1) {
                        //Last lesson. Get next project.
                        if (this.pages.length > index) {
                            if (this.pages[index + 1]){
                                nextLesson = this.pages[index + 1].children[0]
                            } else {
                                nextLesson = this.pages[1].children[0];
                            }
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
