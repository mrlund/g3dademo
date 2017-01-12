import {Component} from '@angular/core';
import {IComponentInputData} from "angular2-dynamic-component";
import {IonicModule, NavParams} from "ionic-angular";

@Component({
    selector: 'inner-content',
    template: `
        <div *ngIf="show">
           <DynamicComponent [componentTemplate]="tpl" [componentModules]="extraModules"
                  [componentInputData]="context">
            </DynamicComponent>
        </div>
  `
})

export class InnerContent{
    public tpl:string;
    public context: IComponentInputData;
    public show: boolean = false;
    public extraModules:Array<any> = [IonicModule];
    public sessionNumber: String;

    constructor(navParams: NavParams) {
        this.sessionNumber = navParams.get('item').menuItem.session;
    }

    recompileTemplate(template, model, parentCtrl?) {
      this.context = {};
      this.tpl = template;
      this.context = {'model': model, 'sessionNumber': this.sessionNumber};
      if(parentCtrl) this.context['ctrl'] = parentCtrl;
      this.show = true;
    }
}
