import { Injectable } from '@angular/core';
import { ToastController} from "ionic-angular";

@Injectable()
export class ToastService {

    constructor(private toastController: ToastController){

    }

    connectionStarted(){
        let toast = this.toastController.create({
            message: 'Connection is established',
            duration: 1000
        });
        toast.present();
    }
    connectionDropped(){
        let toast = this.toastController.create({
            message: 'Connection is established',
            duration: 1000
        });
        toast.present();
    }
}