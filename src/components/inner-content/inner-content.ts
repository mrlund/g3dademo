import {
    Component, /*DynamicComponentLoader,*/ ViewChild, ViewContainerRef, ComponentRef,
    ChangeDetectionStrategy
} from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";

@Component({
    selector: 'inner-content',
    template: `
        <div *ngIf="show">
           <div #container></div>
        </div>
  `
})
export class InnerContent{
    @ViewChild('container', {read: ViewContainerRef}) target;
    public show:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor(/*public dcl: DynamicComponentLoader*/) {
    }

    recompileTemplate(template, model, parentCtrl?) {
        var target = this.target;
        this.show.next(true);
        if(template && target){
            @Component({
                selector: 'compiled-component',
                template: template
            })
            class CompiledComponent {}
            this.target.clear();
            /*this.dcl.loadNextToLocation(CompiledComponent, target).then((ref:ComponentRef<CompiledComponent>) => {
                if(model) ref.instance['model'] = model;
                if(parentCtrl) ref.instance['ctrl'] = parentCtrl;
            });*/
        }
    }
}
