import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from "@angular/core";

@Injectable()
export class Globals {
    // use this property for property binding
    public isClassroomModeOn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isLoggedIn:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    setClassroomModeStatus(flag:boolean) {
        this.isClassroomModeOn.next(flag);
    }

    setLoggedInStatus(flag:boolean) {
        this.isLoggedIn.next(flag);
    }
}