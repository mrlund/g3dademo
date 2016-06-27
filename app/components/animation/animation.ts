import {Component, EventEmitter, Input, Output, OnChanges, ElementRef} from '@angular/core';
import {ContentData} from '../../providers/contentProvider';
declare var createjs: any; 
declare var lib: any;

@Component({
  selector: 'animation',
  providers: [ContentData],
  template: `
    <canvas [hidden]="!animationFileFound" (click)="playPauseAnimation()" width="600" height="600" style="background-color:#FFFFFF;position:relative;display:block;"></canvas>
    <img *ngIf="paused" (click)="playPauseAnimation()" src="/img/play-button-overlay.png" style="position:absolute;width:100%;height:100%;top:0;left:0;" />
  `,
  directives: []  
})
export class Animation implements OnChanges {
  @Input() name:string;
  @Input() project:string;
  @Input() session:string;
  @Input() urlName:string;
  @Input() paused:boolean;
  
  @Output() playStateChanged:EventEmitter<boolean> = new EventEmitter();
  
  private canvas:any;
  private stage:any;
  private exportRoot:any;
  private page_canvas:any;
  private stageWidth:number;
  private stageHeight:number;
  private animationCode:any;
  private content:ContentData;
  private isPaused:boolean;
  private animationFileFound: boolean;
  //private updateRate:EventEmitter = new EventEmitter();
  
  constructor(content: ContentData, private thisElement: ElementRef){
      this.content = content;
  }
ngOnInit() {
    this.content.loadAnimation(this.project, this.session, this.urlName, this.name).then(
        (data) => {
            this.animationFileFound = true;
            this.animationCode = data;
            this.loadAnimation();
        },
        (error) => {
            console.log(error);
            this.animationFileFound = false;
        }
    );
} 
  ngOnChanges(changes){
      if (this.paused && this.stage && !createjs.Ticker.getPaused())
      {
          console.log("Triggered Paused");
          this.playPauseAnimation();
      }
  }
 update(value) {
    //this.updateRate.next(value);
  }
 playPauseAnimation(){
      var anim = this.stage.getChildAt(0);
      this.playStateChanged.emit(!createjs.Ticker.getPaused());
      let st = anim.soundTrack ? anim.soundTrack : anim.children[0].soundTrack;
      st.setPaused(!createjs.Ticker.getPaused());
      createjs.Ticker.setPaused(!createjs.Ticker.getPaused());
      //console.log("Hit " + createjs.Ticker.getPaused());
  }
 loadAnimation(){
        this.page_canvas = this.thisElement.nativeElement.firstElementChild;
        this.stageWidth = this.page_canvas.width;
        this.stageHeight = this.page_canvas.height;

        this.canvas = this.thisElement.nativeElement.firstElementChild;
        let basePath = "/build/content/project"+this.project+"/session"+this.session+"/"+this.urlName+"/";
        var loader = new createjs.LoadQueue(false,basePath);
        loader.installPlugin(createjs.Sound);
        loader.addEventListener("complete", this.handleComplete(this));
        loader.loadManifest(lib.properties.manifest);
 }
 handleComplete(that) {
     return function(){
        that.stage = new createjs.Stage(that.canvas);
        that.stage.addChild(new that.animationCode[that.name]());
        that.stage.update();

        createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
        createjs.Ticker.setFPS(lib.properties.fps);
        createjs.Ticker.addEventListener("tick", that.tickHandler(that));
        that.resizeAnimation();

        let st = that.stage.getChildAt(0).soundTrack ? that.stage.getChildAt(0).soundTrack : that.stage.getChildAt(0).children[0].soundTrack;
        st.setPaused(true);

        createjs.Ticker.setPaused(true);
     }
 }
 tickHandler(that){
     return function(event){
        if (!that.paused && !event.paused){
            that.stage.update();
        }
     }
 }
 resizeAnimation(){
        var widthToHeight = this.stageWidth / this.stageHeight;
        var newWidth = this.thisElement.nativeElement.offsetWidth; //window.innerWidth;
        var newHeight = this.thisElement.nativeElement.offsetHeight; //window.innerHeight;
        var newWidthToHeight = newWidth / newHeight;
        //
        // if (newWidthToHeight > widthToHeight) {
        //     newWidth = newHeight * widthToHeight;
        //     this.page_canvas.style.height = newHeight + "px";
        //     this.page_canvas.style.width = newWidth + "px";
        // } else {
        //     newHeight = newWidth / widthToHeight;
        //     this.page_canvas.style.height = newHeight + "px";
        //     this.page_canvas.style.width = newWidth + "px";
        // }
        // if (scale){
        //     scale = newWidthToHeight / widthToHeight;
        // }

        this.page_canvas.style.height = newWidth + "px";
        this.page_canvas.style.width = newWidth + "px";

        if (this.stage) {
            this.stage.width = newWidth;
            this.stage.height = newWidth;
        }
        //this.page_canvas.style.marginTop = ((window.innerHeight - newHeight) / 2) + "px";
        //this.page_canvas.style.marginLeft = ((window.innerWidth - newWidth) / 2) + "px";
        // this.page_canvas.parentElement.style.width = this.page_canvas.width + "px";
        // this.page_canvas.parentElement.style.height = this.page_canvas.height + "px";
  
 }
 
}