import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {NavController} from "ionic-angular";
import {ProgressProvider} from "../../providers/progressProvider";

@Component({
    templateUrl: 'build/pages/my-notes-page/my-notes-page.html',
})
export class MyNotesPage {
    myNotes: any = [];

    constructor(private http: Http,
                private progress: ProgressProvider,
                private nav: NavController) {}

    load() {
        let token = localStorage.getItem("api_token");
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return new Promise(resolve => {
            this.http.get('https://girlsinc.azurewebsites.net' + '/api/notes', {headers: headers}).subscribe(data => {
                resolve(data.json());
            });
        });
    };

    ngOnInit() {
        this.load().then(data => {
            this.myNotes = data;
        });
    };

    redirect(assignmentData:any) {
        if(assignmentData && (assignmentData.ProjectNumber)) {
            var page = this.progress.getPageByParams(assignmentData.ProjectNumber, assignmentData.SessionNumber, assignmentData.PageNumber);
            if(page) this.nav.setRoot(page.componentType, { item: page });
        }
    }
}