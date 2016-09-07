import {Component} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Component({
    templateUrl: 'build/pages/my-notes-page/my-notes-page.html',
})
export class MyNotesPage {
    myNotes: any = [];

    constructor(private http: Http) {}

    load() {
        let token = localStorage.getItem("api_token");
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return new Promise(resolve => {
            this.http.get('/app-api/' + 'api/notes', {headers: headers}).subscribe(data => {
                resolve(data.json());
            });
        });
    };

    ngOnInit() {
        this.load().then(data => {
            this.myNotes = data;
        });
    };
}