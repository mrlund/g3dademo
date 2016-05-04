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
        prevItem: IContentItem;
        nextItem: IContentItem;
        
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
        prevItem: IContentItem;
        nextItem: IContentItem;
                
        constructor(urlName: string, title: string, componentType: any){
            this.urlName = urlName;
            this.title = title;
            this.componentType = componentType;
        }
}
