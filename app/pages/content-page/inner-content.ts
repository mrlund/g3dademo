import { Component, Input, DynamicComponentLoader, ElementRef,Injector, OnInit, OnChanges, ViewChild, ViewContainerRef, ComponentRef} from '@angular/core';

@Component({
    selector: 'inner-content',
    template: '<div #container></div>'
})
export class InnerContent {
    @Input()
        template: string;

    @ViewChild('container', {read: ViewContainerRef}) target;

    constructor(private dcl: DynamicComponentLoader, private elementRef: ElementRef) {
    }

    ngOnChanges() {
        var template = this.template;
        if(template){
            @Component({
                selector: 'compiled-component',
                template: template
            })
            class CompiledComponent {}
            this.target.clear();
            this.dcl.loadNextToLocation(CompiledComponent, this.target).then((ref:ComponentRef<Type>) => {
                ref.instance.test = '123';
            });
        }
    }
}
