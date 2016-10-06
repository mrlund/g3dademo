import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";
import {IComponentInputData} from "angular2-dynamic-component";
import {IonicModule} from "ionic-angular";

@Component({
    selector: 'inner-content',
    template: `
        <div *ngIf="show">
           <DynamicComponent [componentTemplate]="tpl" [componentModules]="extraModules"
                  [componentInputData]="{'model': inputData}">
            </DynamicComponent>
        </div>
  `
})

export class InnerContent{
    public tpl:string;
    public inputData: IComponentInputData;
    public show: boolean = false;
    public extraModules:Array<any> = [IonicModule];

    constructor() {
    }

    recompileTemplate(template, model, parentCtrl?) {
      this.tpl = template;
      this.inputData = model;
      this.show = true;
    }
}
