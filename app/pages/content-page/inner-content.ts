import { Component, View, Input, DynamicComponentLoader, ElementRef,Injector, OnInit, OnChanges} from '@angular/core';

@Component({
    selector: 'inner-content',
    template: '<div id="container"></div>'
})
export class InnerContent {
    test: string;
    @Input()
        template: string;

    constructor(private loader: DynamicComponentLoader, private injector:Injector, private elementRef: ElementRef) {
        this.test = '123';
    }

    ngOnChanges() {
        var template = this.template;

        @Component({ selector: 'compiled-component', template: template})
        class CompiledComponent {};
        this.loader.loadAsRoot(CompiledComponent, "#container", this.injector);
    }
}
