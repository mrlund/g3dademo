import {Component, Inject} from '@angular/core';
import {SignalrWindow} from "../../services/channelService";

@Component({
    selector: 'character-phrase-img',
    template: `
        <div *ngIf="show" class="character-phrase-block">
            <div class="character-image-block" *ngIf="imagePath">
                <img [ngClass]="{'image-animation': isImgAnimationOn}" src="{{imagePath}}">
            </div>
            <div class="character-text-block" *ngIf="text && isTextAnimationOn">
                <p class="triangle-border left" [ngClass]="{'text-animation': isTextAnimationOn}">{{text}}</p>
            </div>
        </div>
  `,
})
export class CharacterPhraseImg {
    public text: string;
    public imagePath: string;
    public isTextAnimationOn: boolean = false;
    public isImgAnimationOn: boolean = false;
    public show: boolean = false;

    constructor(@Inject(SignalrWindow) public window:SignalrWindow){}

    draw(model:any){
        if(model['characterImagePath'] && model['characterImageText']) {
            this.show = true;
            this.text = model['characterImageText'];
            this.imagePath = model['characterImagePath'];
            this.isImgAnimationOn = true;
            setTimeout(() => {
                this.isTextAnimationOn = true;
            }, 1000);
        }
    }
}
