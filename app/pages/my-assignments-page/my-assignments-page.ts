import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Component({
    templateUrl: 'build/pages/my-assignments-page/my-assignments-page.html',
})
export class MyAssigmentsPage {
    private myAssignments: any = [];

    constructor(private http: Http) {}

    load() {
        let token = localStorage.getItem("api_token");
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return new Promise(resolve => {
            this.http.get('https://girlsinc.azurewebsites.net' + '/api/assignments', {headers: headers}).subscribe(data => {
                resolve(data.json());
            });
        });
    };

    ngOnInit() {
        this.load().then(data => {
            this.myAssignments = data;
        });
    };
}