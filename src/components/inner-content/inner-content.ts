import {Component} from '@angular/core';
import {IComponentInputData} from "angular2-dynamic-component";
import {IonicModule} from "ionic-angular";

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

    constructor() {
    }

    recompileTemplate(template, model, parentCtrl?) {
      this.context = {};
      this.tpl = template;
      this.context = {'model': model};
      if(parentCtrl) this.context['ctrl'] = parentCtrl;
      this.show = true;
    }
}
