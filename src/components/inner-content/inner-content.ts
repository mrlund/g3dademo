import {
  Component, /*DynamicComponentLoader,*/ ViewChild, ViewContainerRef, ComponentRef,
  ChangeDetectionStrategy, TemplateRef
} from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";
import {IComponentInputData} from "angular2-dynamic-component";

@Component({
    selector: 'inner-content',
    template: `
        <div *ngIf="show">
           <!--<div #container></div>-->
           <!--<template [ngTemplateOutlet]="currentTplRef" [ngOutletContext]="model"></template>-->
           <DynamicComponent [componentTemplate]="tpl" 
                  [componentInputData]="inputData">
            </DynamicComponent>
        </div>
  `
})
export class InnerContent{
    @ViewChild('container', {read: ViewContainerRef}) target;
    public show:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // currentTplRef: TemplateRef;

  // public model = {a: 1};

  tpl:string;
  inputData: IComponentInputData;
  show: boolean = false;
    constructor(/*public dcl: DynamicComponentLoader*/) {
    }

    recompileTemplate(template, model, parentCtrl?) {
      this.tpl = template;
      this.inputData = model;
      this.show = true;
        // var target = this.target;
        // this.show.next(true);
        // if(template && target){
        //     @Component({
        //         selector: 'compiled-component',
        //         template: template
        //     })
        //     class CompiledComponent {}
        //
        // }
    }
}
