import {Question} from './question';
import {MenuItem} from './menu-item';

export interface IContentItem {
        id: number;
        componentType: any;
        urlName: string; 
        title: string; 
        project: number;
        session: number;
        page: number;  
        menuItem: MenuItem;
        prevItem: ContentItem;
        nextItem: ContentItem;
        
}

export class ContentItem implements IContentItem {
        id: number;
        componentType: any;
        urlName: string;        
        title: string; 
        project: number;
        session: number;
        page: number;   
        menuItem: MenuItem;                
        prevItem: ContentItem;
        nextItem: ContentItem;
                
        constructor(urlName: string, title: string, componentType: any){
            this.urlName = urlName;
            this.title = title;
            this.componentType = componentType;
        }
}
export class AnimationContentItem implements IContentItem {
        id: number;
        componentType: any;
        urlName: string;
        title: string; 
        project: number;
        session: number;
        page: number;   
        menuItem: MenuItem;                
        prevItem: ContentItem;
        nextItem: ContentItem;
        animationName: string; // is used as a name of js file with animation
        firstFrameFile: string; // is used for showing first frame of video, before it's loaded

        constructor(urlName: string, title: string, componentType: any, animationName?: string){
            let defaultAnimationNameFile = "scene_test";
            this.urlName = urlName;
            this.title = title;
            this.componentType = componentType;
            this.animationName = animationName ? animationName : defaultAnimationNameFile;

            this.firstFrameFile =  this.animationName + '.jpg'; // now a name of first frame is the same as a name of animation js file
        }
}
