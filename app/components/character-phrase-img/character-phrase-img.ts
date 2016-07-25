import {Component, Inject} from '@angular/core';
import {SignalrWindow} from "../../services/channelService";

@Component({
    selector: 'character-phrase-img',
    providers: [],
    template: `
        <div style="display: inline-block; width: 100%">
            <div id='character-image-block' *ngIf="imagePath && show" style="float: left; width: 0px">
                <img src="{{imagePath}}">
            </div>
            <div id='character-text-block' *ngIf="text && show" style="float: left; display: none">
                <p class="triangle-border left">{{text}}</p>
            </div>
        </div>
  `,
})
export class CharacterPhraseImg {
    private text: string;
    private imagePath: string;
    private show: boolean = false;

    constructor(@Inject(SignalrWindow) private window:SignalrWindow){}

    draw(model:any){
        if(model['characterImagePath'] && model['characterImageText']) {
            this.text = model['characterImageText'];
            this.imagePath = model['characterImagePath'];
            this.show = true;
            setTimeout(() => {
                let image = this.window.$("#character-image-block");
                image.animate({width: 100});
            }, 300);
            setTimeout(() => {
                let text = this.window.$("#character-text-block");
                text.fadeIn( "slow" );
            }, 700);

        }
    }
}