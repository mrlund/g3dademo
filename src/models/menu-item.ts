import {IContentItem} from './content-item';

export class MenuItem {
    title: string; 
    children: Array<MenuItem>;
    project: number;
    session: number;
    parent: MenuItem;
    prevItem: MenuItem;
    nextItem: MenuItem;
    pages: Array<IContentItem>;
    isComplete: boolean;
    
    constructor(title: string, project: number, session: number, children: Array<MenuItem>, pages?: Array<IContentItem>){
        this.title = title;
        this.children = children;
        this.project = project;
        this.session = session;
        this.pages = pages;
    }
    
}