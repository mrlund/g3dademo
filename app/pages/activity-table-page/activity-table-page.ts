import {Page, NavController, NavParams, MenuController, Toast} from 'ionic-angular';
import {ContentData} from '../../providers/contentProvider';
import {WelcomePage} from '../welcome-page/welcome-page';
import {ContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';



@Page({
    templateUrl: 'build/pages/activity-table-page/activity-table-page.html',
    providers: [ContentData],
    directives: []
})
export class ActivityTablePage {
    selectedItem: any;
    pageContent: string;
    categories: Array<any>;
    table: Array<any> = [];
    addList: Array<any> = [];
    addSelected: any;
    total: number;

    constructor(private nav: NavController, navParams: NavParams, private content: ContentData, private menu: MenuController) {
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        if (!this.selectedItem)
        {
            this.selectedItem = new ContentItem(navParams.get('urlName'), navParams.get('urlName'), ActivityTablePage);
            this.selectedItem.project = navParams.get('project');
            this.selectedItem.session = navParams.get('session');
            this.selectedItem.menuItem = new MenuItem('Title', this.selectedItem.project, this.selectedItem.session, null, [this.selectedItem]);
            this.selectedItem.page = 2;
        }
    }
    ngOnInit() {
        this.content.loadQuestions(this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.urlName).then(
            (data) => {
                this.categories = data.categories;
                this.categories.forEach(cat => {
                   cat.items.forEach(item => {
                      item.category = cat; 
                      this.addList.push({categoryId: cat.categoryId, name: item.name + ' $' + item.price, item: item});
                   });
                });
            },
            (error) => {
                console.log(error);
            }
        );
        this.content.loadContent(this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.urlName).then(
            (data) => {
                this.pageContent = data._body;
            },
            (error) => {
                console.log(error);
            }
        );
    }
    addItem(){
        this.table.push(this.addSelected);
        var newList = [];
        this.addList = this.addList.filter(item => {
            return item.categoryId != this.addSelected.category.categoryId
        });
        this.calculateTotal();
        this.addSelected = "0";
    }
    calculateTotal(){
        this.total = 0;
        this.table.forEach(item => this.total += item.price);
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
