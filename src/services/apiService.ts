import { Injectable } from '@angular/core';
import {Headers, Http, Response} from "@angular/http";
import {ProgressProvider} from "../providers/progressProvider";
import {UserService} from "./userService";
import {Observable} from "rxjs/Rx";

@Injectable()
export class ApiService {
  public currentPage:any = null;
  public userData:any = null;

    // todo: should be fixed with real enum, cause there is no multiple-choice and etc
  public ResponseType:any = {
        'other':0,
        'PreTest':1,
        'PostTest':2,
        'poll':3,
        'PeerReview':4,
    };

    constructor(public http: Http,
                public progress: ProgressProvider,
                public userService: UserService) {
        progress.getLastPage().subscribe((data) => {
            this.currentPage = data;
        });
        this.userData = userService.getUserData();
    }

    getResponceType(typeName:string):number{
        var result = this.ResponseType[typeName];
        return result ? result : 0;
    }

    postResponces(question: any): Observable<Response> {
        let token = localStorage.getItem("api_token");
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        var currentData = new Date();

        var resType = this.getResponceType(question.type);
        var data = {
            "ProjectNumber": this.currentPage.menuItem['project'],
            "SessionNumber": this.currentPage.menuItem['session'],
            "PageNumber": this.currentPage.page,
            "ApplicationUserId": this.userData['UserId'],
            "ResponseType": resType,
            "SubmittedDate": currentData.toISOString(),
            "CourseClassId": this.userData['CourseClassId'],
            "ResponseData": JSON.stringify(question),
        };

        return this.http.post('https://girlsinc.azurewebsites.net' + '/api/responses', data, {headers: headers});
    }


}
