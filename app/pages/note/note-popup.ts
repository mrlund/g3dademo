import {Component} from '@angular/core';
import {ModalController, Platform, NavParams, ViewController} from 'ionic-angular';
import {ProgressProvider} from '../../providers/progressProvider';

    
@Component({
    templateUrl: './build/pages/note/note-popup.html',
    selector: 'note-popup'
})
export class NotePopup {
    character;
    note;

    constructor(
        private platform: Platform,
        private params: NavParams,
        private viewCtrl: ViewController,
        private progress: ProgressProvider
    ) {
        this.note = "";
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

    saveNote() {
        let sessionNumber = this.params.get('sessionNumber');
        let projectNumber = this.params.get('projectNumber');
        let pageNumber = this.params.get('pageNumber');
        let self = this;
        let noteData = {
                sessionNumber: sessionNumber,
                projectNumber: projectNumber,
                pageNumber: pageNumber,
                NoteText: self.note
        };
        this.progress.saveNote(noteData).subscribe(res => {
                console.log('result save note');
                console.log(res);
                this.viewCtrl.dismiss();
            });
    }
}