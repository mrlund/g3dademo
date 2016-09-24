import {Component, ViewChild} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {ProgressProvider} from "../../providers/progressProvider";
import {Nav, NavController} from "ionic-angular";

@Component({
    templateUrl: 'build/pages/my-assignments-page/my-assignments-page.html',
})
export class MyAssigmentsPage {
    private myAssignments: any = [];

    constructor(private http: Http,
                private progress: ProgressProvider,
                private nav: NavController) {
    }

    private processAssignment(assignment: any) {
        let processedData;
        if (Array.isArray(assignment)) {
            processedData = [];
            assignment.forEach(value => processedData.push(this.processAssignment(value)));
        }
        else {
            if(assignment.type) {
                switch (assignment.type) {
                    case 'peer-review':
                        let question = assignment.question;
                        let answer = assignment.answers.map(value => `${value.answer} [ ${value.isCorrect ? "correct" : "not correct"} ]`).join(', ');
                        processedData = `${question}: ${answer}`;
                        break;
                    default:
                        processedData = JSON.stringify(assignment);
                }
            } else if(assignment.price){
                processedData = `'${assignment.name}: ${assignment.price}`;
            } else {
                processedData = JSON.stringify(assignment);
            }
        }

        return processedData;
    }

    load() {
        let token = localStorage.getItem("api_token");
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        return new Promise(resolve => {
            this.http.get('https://girlsinc.azurewebsites.net' + '/api/assignments', {headers: headers}).subscribe(data => {
                let myAssignments = data.json();
                for (let i of myAssignments) {
                    i.AssignmentData = this.processAssignment(JSON.parse(i.AssignmentData));
                }
                resolve(myAssignments);
            });
        });
    };

    ngOnInit() {
        this.load().then(data => {
            this.myAssignments = data;
        });
    };

    redirect(assignmentData: any) {
        if (assignmentData && (assignmentData.ProjectNumber)) {
            var page = this.progress.getPageByParams(assignmentData.ProjectNumber, assignmentData.SessionNumber, assignmentData.PageNumber);
            if (page) this.nav.setRoot(page.componentType, {item: page});
        }
    }
}