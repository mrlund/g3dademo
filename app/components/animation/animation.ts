import {Component, EventEmitter, Input, Output, OnChanges, ElementRef} from '@angular/core';
import {ContentData} from '../../providers/contentProvider';
import {Globals} from '../../globals';
declare var createjs: any; 
declare var lib: any;

@Component({
  selector: 'animation',
  providers: [ContentData],
  template: `
        <canvas *ngIf="isClassroomModeOn == false" [hidden]="!animationFileFound" (click)="playPauseAnimation()" width="600" height="600" style="background-color:#FFFFFF;position:relative;display:block;"></canvas>
        <img *ngIf="paused && isClassroomModeOn == false" (click)="playPauseAnimation()" src="/img/play-button-overlay.png" style="position:absolute;width:100%;height:100%;top:0;left:0;" />
        <canvas *ngIf="isClassroomModeOn == true" width="600" height="600" style="background-color:#FFFFFF;position:relative;display:block;"></canvas>
        <img *ngIf="isClassroomModeOn == true" src="/img/play-button-disabled-overlay.png" style="position:absolute;width:100%;height:100%;top:0;left:0;" />
  `,
  directives: []  
})
export class Animation implements OnChanges {
  @Input() name:string;
  @Input() project:string;
  @Input() session:string;
  @Input() urlName:string;
  @Input() paused:boolean;
  
  @Output() playStateChanged:EventEmitter<boolean> = new EventEmitter<boolean>();
  
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
  private isClassroomModeOn: boolean = false;
  private isClassroomModeOn: boolean = false;
  private sound: any = null;

  constructor(content: ContentData,
              private thisElement: ElementRef,
              private _globals: Globals){
      var self = this;
      this.content = content;
      this._globals.isClassroomModeOn.subscribe(value => {
          this.isClassroomModeOn = value;
          this.loadAnimationAction();
      });
      window['playSound'] = function (id, loop) {
          self.sound = createjs.Sound.play(id, createjs.Sound.INTERRUPT_EARLY, 0, 0, loop);
          return self.sound;
      }
  }
  ngOnInit() {
      this.loadAnimationAction();
  }
    
  loadAnimationAction(){
      if(this.project && this.session && this.urlName && this.name){
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
      let st = this.sound;
      if (st){
          st.setPaused(!createjs.Ticker.getPaused());
      }
      createjs.Ticker.setPaused(!createjs.Ticker.getPaused());
  }
 loadAnimation(){
     if (!createjs.Sound.initializeDefaultPlugins()) { return; }
        this.page_canvas = this.thisElement.nativeElement.firstElementChild;
        this.stageWidth = this.page_canvas.width;
        this.stageHeight = this.page_canvas.height;

        this.canvas = this.thisElement.nativeElement.firstElementChild;
        let basePath = "/build/content/project"+this.project+"/session"+this.session+"/"+this.urlName+"/";
        var loader = new createjs.LoadQueue(false, basePath);
        loader.installPlugin(createjs.Sound);
        loader.addEventListener("complete", this.handleComplete(this));
        loader.addEventListener("fileload", this.handleFileLoad);
        loader.loadManifest(lib.properties.manifest);
 }
 handleFileLoad(evt) {
    if (evt.item.type == "image") { 
        if(!window['createJSImages']) window['createJSImages'] = {};
        if(!window['images']) window['images'] = {};
        window['createJSImages'][evt.item.id] = evt.result;
        window['images'][evt.item.id] = evt.result;
    }
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
        if (!st){
            st = createjs.Sound._instances[0];
        }        
        if (st){
            st.setPaused(true);
        }
        createjs.Ticker.setPaused(true);
     }
 }
 tickHandler(that){
     var self = this;
     var newCircle = false;
     return function(event){
        if (!that.paused && !event.paused){
            that.stage.update();
        }
         let stage = that.stage.children[0];
         let timeline = stage['timeline'];
         if(timeline.position == 0) newCircle = false;
         if(timeline.duration - timeline.position == 1 && !newCircle){ //to pause at the end of movie
             newCircle = true;
             self.playPauseAnimation();
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