import { Component, Input, DynamicComponentLoader, ElementRef,Injector, OnInit, OnChanges, ViewChild, ViewContainerRef, ComponentRef} from '@angular/core';

@Component({
    selector: 'inner-content',
    template: '<div #container></div>'
})
export class InnerContent {
    @Input() template: string;
    @Input() model: string;

    @ViewChild('container', {read: ViewContainerRef}) target;

    constructor(private dcl: DynamicComponentLoader, private elementRef: ElementRef) {}

    ngOnChanges() {
        var template = this.template;
        var target = this.target;
        var model = this.model;
        var self = this;
        if(template && target){
            @Component({
                selector: 'compiled-component',
                template: template
            })
            class CompiledComponent {}
            this.target.clear();
            this.dcl.loadNextToLocation(CompiledComponent, target).then((ref:ComponentRef<CompiledComponent>) => {
                if(model){
                    ref.instance.model = JSON.parse(model);
                }
            });
        }
    }
}
