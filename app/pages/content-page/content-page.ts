import {NavController, NavParams, MenuController, Toast} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {ContentData} from '../../providers/contentProvider';
import {ProgressProvider} from '../../providers/progressProvider';

import {WelcomePage} from '../welcome-page/welcome-page';
import {Animation} from '../../components/animation/animation';
import {InnerContent} from '../content-page/inner-content';
import {ContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';
import {Globals} from '../../globals';

@Component({
    templateUrl: 'build/pages/content-page/content-page.html',
    providers: [],
    directives: [Animation, InnerContent]
})
export class ContentPage {
    selectedItem: ContentItem;
    pageContent: string;
    pageModel: string;
    animationName: string;
    pauseAnimation: boolean = true;
    isClassroomModeOn: boolean = false;

    @ViewChild(InnerContent) innerContent:InnerContent;

    constructor(private nav: NavController,
                navParams: NavParams,
                private content: ContentData,
                private menu: MenuController,
                private progress: ProgressProvider,
                private _globals: Globals) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        if (!this.selectedItem)
        {
            this.selectedItem = new ContentItem(navParams.get('urlName'), navParams.get('urlName'), ContentPage);
            this.selectedItem.project = navParams.get('project');
            this.selectedItem.session = navParams.get('session');
            this.selectedItem.menuItem = new MenuItem('Title', this.selectedItem.project, this.selectedItem.session, null, [this.selectedItem]);
            this.selectedItem.page = 2;
            this.animationName = "scene_test";
        }
        if (this.selectedItem.page == 1) {
            this.animationName = "scene_test";
        }
        this.pageContent = "<h1>This is a content page!</h1>";
        this.pageModel = null;

        this._globals.isClassroomModeOn.subscribe(value => {
            this.isClassroomModeOn = value
        });
    }
    ngOnInit(){
        let self = this;
        this.content.loadContent(this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.urlName).then(
            (data) => {
                self.pageContent = data['_body'];
                self.animationName = "scene_test";
                self.content.loadModel(self.selectedItem.menuItem.project, self.selectedItem.menuItem.session, self.selectedItem.urlName).then(
                    (data) => {
                        self.pageModel = data['_body']; //model as string
                        self.innerContent.recompileTemplate(self.pageContent, self.pageModel);
                    }
                ).catch((e) => {
                    self.innerContent.recompileTemplate(self.pageContent, self.pageModel);
                })
            },
            (error) => {
                console.log(error);
            }
        );
    }
    toggleMenu() {
        if (this.menu.isOpen()) {
            this.menu.close();
        } else {
            this.menu.open();
        }
    }
    navigateBackTo(page: ContentItem) {
        this.progress.openPage(page);
        this.pauseAnimation = true;
        this.nav.pop();
    }
    navigateForwardTo(page: ContentItem) {
        this.progress.openPage(page);
        this.pauseAnimation = true;
        this.nav.push(page.componentType, { item: page });
    }
    finishSession() {
        this.progress.completeLesson(this.selectedItem.menuItem);
        let toast = Toast.create({
            message: 'Congratulations - You completed the lesson!',
            duration: 1000
        });
        toast.onDismiss(() => {
            this.nav.setRoot(WelcomePage);
        });
        this.nav.present(toast);
    }
    setAnimationState(event){
        console.log(event);
        this.pauseAnimation = event;
    }

}
