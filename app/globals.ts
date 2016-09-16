import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Injectable} from "@angular/core";

@Injectable()
export class Globals {
    // use this property for property binding
    public isClassroomModeOn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public currentPage: BehaviorSubject<Object> = new BehaviorSubject<Object>(null);
    public popupTypeActivated: BehaviorSubject<String> = new BehaviorSubject<String>('');

    setClassroomModeStatus(flag: boolean) {
        this.isClassroomModeOn.next(flag);
    }
    setPopup(type: string) {
        this.popupTypeActivated.next(type);
    }
    setLoggedInStatus(flag: boolean) {
        this.isLoggedIn.next(flag);
    }
    setCurrentPage(currentPage) {
        this.currentPage.next(currentPage);
    }
    clearCurrentPage() {
        this.currentPage.next(null);
    }

}