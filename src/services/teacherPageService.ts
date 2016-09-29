import { Injectable } from '@angular/core';
import {SignalrWindow} from "./channelService";

@Injectable()
export class TeacherPageService {

    constructor(private window:SignalrWindow){
    }

    startTimer(){
        setInterval(this.clearAssignments, 60*60*1000);//1 hour
    }

    clearAssignments(){
        this.window.localStorage.removeItem("suggestions");
    }

}