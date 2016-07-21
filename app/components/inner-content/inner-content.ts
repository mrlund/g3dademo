import { Component, DynamicComponentLoader, ViewChild, ViewContainerRef, ComponentRef} from '@angular/core';

@Component({
    selector: 'inner-content',
    template: '<div #container></div>'
})
export class InnerContent{
    @ViewChild('container', {read: ViewContainerRef}) target;

    constructor(private dcl: DynamicComponentLoader) {}

    recompileTemplate(template, model) {
        var target = this.target;
        if(template && target){
            @Component({
                selector: 'compiled-component',
                template: template
            })
            class CompiledComponent {}
            this.target.clear();
            this.dcl.loadNextToLocation(CompiledComponent, target).then((ref:ComponentRef<CompiledComponent>) => {
                if(model){
                    ref.instance['model'] = model;
                }
            });
        }
    }
}
