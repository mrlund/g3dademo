import { Component, Input, DynamicComponentLoader,ElementRef,Inject,OnInit} from '@angular/core';

@Component({
    selector: 'inner-content',
    template: ' <div class="content-page"></div>'
})

export class InnerContent {
    @Input()
        template:string;

    fakeData:string;

    constructor(private dynamicComponentLoader:DynamicComponentLoader, private elementRef:ElementRef) {
        @Component({selector: 'compiled-component', template: this.template})
        class CompiledComponent {
        };
        this.dynamicComponentLoader.loadAsRoot(CompiledComponent, this.elementRef, 'container');
    }
}
