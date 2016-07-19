import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from "@angular/core";

@Injectable()
export class Globals {
// use this property for property binding
    public isClassroomModeOn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setClassroomModeStatus(isLoggedIn:boolean) {
        this.isClassroomModeOn.next(isLoggedIn);
    }
}