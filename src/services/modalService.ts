import { Injectable } from '@angular/core';
import {NotePopup} from "../pages/note/note-popup";
import {Globals} from "../app/globals";
import {ModalController} from "ionic-angular";
import {TeacherPage} from "../pages/teacher-page/teacher-page";

@Injectable()
export class ModalService {
    isLoggedIn: boolean = false;
    currentPage: any = null;

    constructor(public _globals: Globals,
                public modalCtrl: ModalController){
        _globals.isLoggedIn.subscribe(value => {
            this.isLoggedIn = value;
        });
        _globals.currentPage.subscribe(value => {
            this.currentPage = value;
        });
        _globals.popupTypeActivated.subscribe(value => {
            if(value == ''){
              this.clearAppClass();
            }
            else {
                this.clearAppClass();
                if(value == 'note') document.querySelector('ion-app').classList.add('note-popup');
                if(value == 'teacher') document.querySelector('ion-app').classList.add('teacher-popup');
            }
        });
    }

    clearAppClass(){
        let appElement = document.querySelector('ion-app');
        appElement.classList.remove('note-popup'); //we can't just clear the class name because Ionic use it for own aims
        appElement.classList.remove('teacher-popup');
    }

    showAddNotePopup() {
        if (this.isLoggedIn && this.currentPage) {
            let modal = this.modalCtrl.create(NotePopup, {
                sessionNumber: this.currentPage.session,
                projectNumber: this.currentPage.project,
                pageNumber: this.currentPage.page
            });
            modal.present();
            this._globals.setPopup('note');
        }
    }

    showTeacherPagePopup() {
        if (this.isLoggedIn) {
            let modal = this.modalCtrl.create(TeacherPage);
            modal.present();
            this._globals.setPopup('teacher');
        }
    }
}
