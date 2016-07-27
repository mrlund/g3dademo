import {NavController, NavParams, MenuController, Toast} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {ContentData} from '../../providers/contentProvider';
import {WelcomePage} from '../welcome-page/welcome-page';
import {ContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';
import {InnerContent} from '../../components/inner-content/inner-content';

import {ProgressProvider} from '../../providers/progressProvider';
import {SafeHtml, DomSanitizationService} from "@angular/platform-browser";
import {CharacterPhraseImg} from "../../components/character-phrase-img/character-phrase-img";
import {Http, Headers} from "@angular/http";

@Component({
    templateUrl: 'build/pages/activity-table-page/activity-table-page.html',
    providers: [],
    directives: [InnerContent, CharacterPhraseImg]
})
export class ActivityTablePage {
    selectedItem: any;
    pageContent: string;
    categories: Array<any>;
    table: Array<any> = [];
    addList: Array<any> = [];
    addSelected: any;
    total: number;
    pageModel: string;
    Math : any = window['Math'];

    @ViewChild(InnerContent) innerContent:InnerContent;
    @ViewChild(CharacterPhraseImg) characterPhraseImg:CharacterPhraseImg;

    constructor(private nav: NavController, navParams: NavParams, private content: ContentData, private menu: MenuController, private progress: ProgressProvider,  private http: Http) {
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
        let self = this;
        this.content.loadQuestions(this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.urlName).then(
            (data) => {
                this.categories = data.categories;
                this.categories.forEach(cat => {
                   let processedCat = {categoryId: cat.categoryId, name: cat.name};
                   cat.items.forEach(item => {
                      item.category = processedCat;
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
                self.pageContent = data['_body'];
                self.content.loadModel(self.selectedItem.menuItem.project, self.selectedItem.menuItem.session, self.selectedItem.urlName).then(
                    (data) => {
                        self.pageModel = data['_body'] ? JSON.parse(data['_body']) : null;
                        let assignments = self.pageModel['assignments'];
                        let randomAssignments = [];
                        for(let assighment of assignments){
                            randomAssignments.push(self.getRandom(assighment));
                        }
                        self.pageModel['randomAssignments'] = randomAssignments;
                        self.innerContent.recompileTemplate(self.pageContent, self.pageModel, self);
                        self.characterPhraseImg.draw(self.pageModel);
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
    getRandom(arr){
<<<<<<< HEAD
        // return arr[Math.floor(Math.random() * arr.length)];
        return arr[0];
=======
        return arr[Math.floor(Math.random() * arr.length)];
>>>>>>> master
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
        this.progress.openPage(page);
        this.nav.pop();
    }
    navigateForwardTo(page) {
        this.progress.openPage(page);
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
    onSubmit(){
        var token= localStorage.getItem("api_token");
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        this.http.post('/app-api' + '/api/assignment',
            {
                AssignmentId : 102,
                AssignmentName: 'budget exercise',
                AssignmentData: JSON.stringify(this.table)
            },
            {headers: headers}
        ).subscribe(res => {
            alert('success!!')
        });
    }

}
