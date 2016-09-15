import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {ProgressProvider} from "../providers/progressProvider";
import {UserService} from "./userService";

@Injectable()
export class ApiService {
    private currentPage:any = null;
    private userData:any = null;

    // todo: should be fixed with real enum, cause there is no multiple-choice and etc
    private ResponseType:any = {
        'other':0,
        'PreTest':1,
        'PostTest':2,
        'poll':3,
        'PeerReview':4,
    };

    constructor(private http: Http,
                private progress: ProgressProvider,
                private userService: UserService) {
        progress.getLastPage().subscribe((data) => {
            this.currentPage = data;
        });
        this.userData = userService.getUserData();
    }

    getResponceType(typeName:string):number{
        var result = this.ResponseType[typeName];
        return result ? result : 0;
    }

    postResponces(question: any){
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