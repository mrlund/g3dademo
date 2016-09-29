import {Component} from '@angular/core';
import {Platform, NavParams, ViewController} from 'ionic-angular';
import {ProgressProvider} from '../../providers/progressProvider';
import {Globals} from "../../app/globals";
import {Subscription} from "rxjs/Subscription";


@Component({
    templateUrl: 'note-popup.html',
    selector: 'note-popup'
})
export class NotePopup {
    character;
    note;
    saveNoteSub: Subscription;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController,
        public progress: ProgressProvider,
        public _globals: Globals
    ) {
        this.note = "";
    }

    ngOnDestroy(){
        if(this.saveNoteSub) this.saveNoteSub.unsubscribe();
    }

    dismiss() {
        this.viewCtrl.dismiss();
        this._globals.setPopup('');
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
        this.saveNoteSub = this.progress.saveNote(noteData).subscribe(res => {
                console.log('result save note');
                console.log(res);
                this.dismiss();
            });
    }
}
