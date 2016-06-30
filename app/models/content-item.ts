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
        animationName: string;

        constructor(urlName: string, title: string, componentType: any){
            this.urlName = urlName;
            this.title = title;
            this.componentType = componentType;
        }
}
