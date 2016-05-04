import {Page, NavController, NavParams, MenuController, Toast} from 'ionic-angular';
import {ContentData} from '../../providers/contentProvider';
import {WelcomePage} from '../welcome-page/welcome-page';
import {Animation} from '../../components/animation/animation';

@Page({
    templateUrl: 'build/pages/content-page/content-page.html',
    providers: [ContentData],
    directives: [Animation]
})
export class ContentPage {
    selectedItem: any;
    pageContent: string;
    animationName: string;

    constructor(private nav: NavController, navParams: NavParams, content: ContentData, private menu: MenuController) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        if (this.selectedItem.page == 1) {
            console.log(this.selectedItem);
            
            this.animationName = "scene_test";
        }
        this.pageContent = "<h1>This is a content page!</h1>";
        content.loadContent(this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.urlName).then(
            (data) => {
                this.pageContent = data._body;
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
    navigateBackTo(page) {
        this.nav.pop();
    }
    navigateForwardTo(page) {
        this.nav.push(page.componentType, { item: page });
    }
    finishSession() {
        let toast = Toast.create({
            message: 'Congratulations - You completed the lesson!',
            duration: 1000
        });
        toast.onDismiss(() => {
            this.nav.setRoot(WelcomePage);
        });
        this.nav.present(toast);
    }

}
