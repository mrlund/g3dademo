import { Injectable } from '@angular/core';
import {NotePopup} from "../pages/note/note-popup";
import {Globals} from "../globals";
import {ModalController} from "ionic-angular";

@Injectable()
export class NoteService {
    isLoggedIn: boolean = false;
    currentPage: any = null;

    constructor(private _globals: Globals,
                private modalCtrl: ModalController){
        _globals.isLoggedIn.subscribe(value => {
            this.isLoggedIn = value;
        });
        _globals.currentPage.subscribe(value => {
            this.currentPage = value;
        });
    }

    showAddNotePopup() {
        if (this.isLoggedIn && this.currentPage) {
            let modal = this.modalCtrl.create(NotePopup, {
                sessionNumber: this.currentPage.session,
                projectNumber: this.currentPage.project,
                pageNumber: this.currentPage.page
            });
            modal.present();
        }
    }
}
