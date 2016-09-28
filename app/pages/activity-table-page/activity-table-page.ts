import {NavController, NavParams, MenuController, ToastController, Content} from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {ContentData} from '../../providers/contentProvider';
import {ContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';
import {InnerContent} from '../../components/inner-content/inner-content';

import {ProgressProvider} from '../../providers/progressProvider';
import {UserService} from "../../services/userService";
import {ChannelService} from '../../services/channelService';
import {CharacterPhraseImg} from "../../components/character-phrase-img/character-phrase-img";
import {Http, Headers} from "@angular/http";
import {ModalService} from "../../services/modalService";
import {Globals} from "../../globals";
import {Subscription} from "rxjs/Subscription";

@Component({
    templateUrl: 'build/pages/activity-table-page/activity-table-page.html',
    providers: [],
    directives: [InnerContent, CharacterPhraseImg]
})
export class ActivityTablePage {
    randomSuggestions: Array<any> = [];
    selectedItem: any;
    pageContent: string;
    categories: Array<any>;
    table: Array<any> = [];
    addList: Array<any> = [];
    fullList: Array<any> = [];
    nextCategoryName: string = "";
    addSelected: any;
    total: number;
    pageModel: string;
    Math : any = window['Math'];
    isSubmitted : boolean = false;
    isClassroomModeOn : boolean = false;
    selectItem: any = {};
    userData:any;
    classroomMode: Subscription;

    @ViewChild(InnerContent) innerContent:InnerContent;
    @ViewChild(CharacterPhraseImg) characterPhraseImg:CharacterPhraseImg;
    @ViewChild(Content) ionContent: Content;

    constructor(private nav: NavController,
                navParams: NavParams,
                private content: ContentData,
                private menu: MenuController,
                private progress: ProgressProvider,
                private userService: UserService,
                private channelService:ChannelService,
                private http: Http,
                private toastController: ToastController,
                private modalService: ModalService,
                private _globals: Globals) {
        // If we navigated to this page, we will have an item available as a nav param
        this.classroomMode =_globals.isClassroomModeOn.subscribe((data) => {
            this.isClassroomModeOn = data;
        });
        this.selectedItem = navParams.get('item');
        this.userData = userService.getUserData();
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
                      this.fullList.push({categoryId: cat.categoryId, name: item.name + ' $' + item.price, item: item});
                   });
                });
                this.nextCategoryName = this.addList[0] && this.addList[0].item.category.categoryId ? this.addList[0].item.category.name : "";
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
                        self.innerContent.recompileTemplate(self.pageContent, self.pageModel, self);
                        self.characterPhraseImg.draw(self.pageModel);
                    }
                ).catch((e) => {
                    self.innerContent.recompileTemplate(self.pageContent, self.pageModel, self);
                })
            },
            (error) => {
                console.log(error);
            }
        );
    }
    ngOnDestroy(){
        if(this.classroomMode) this.classroomMode.unsubscribe();
    }
    getRandom(arr){
        let self = this;
        if(this.randomSuggestions.length == 0){ //it's needed to avoid repeated calling of getRandom method.
            arr.forEach(assignments => {
                self.randomSuggestions.push(assignments[Math.floor(Math.random() * assignments.length)]);
            }, self);
        }
        return this.randomSuggestions
    }
    syncPage(){
        this.channelService.getConnection().proxies.inclasshub.invoke('forceSyncClients', this.selectedItem.menuItem.project, this.selectedItem.menuItem.session, this.selectedItem.page);
    }
    removeItem(removeItem){
        let tempList: Array<any> = new Array<any>();
        this.table.splice(this.table.indexOf(removeItem),1);
        this.fullList.forEach(item => {
            if (item && item.categoryId == removeItem.category.categoryId){
                tempList.push(item);
            };
        });
        this.selectItem = {};
        this.addList = [...tempList, ...this.addList];
        this.calculateTotal();
        this.nextCategoryName = this.addList[0] && this.addList[0].item.category.categoryId ? this.addList[0].item.category.name : "";
    }
    addItem(selectedItem){        
        this.table.push(selectedItem);
        var newList = [];
        this.addList = this.addList.filter(item => {
            return item.categoryId != selectedItem.category.categoryId
        });
        this.nextCategoryName = this.addList[0] && this.addList[0].item.category.categoryId ? this.addList[0].item.category.name : "";
        this.calculateTotal();
        setTimeout(()=>{
            this.ionContent.scrollToBottom(100);
        }, 100);
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
        this.progress.finishSession(this.selectedItem.menuItem);
    }
    onSubmit(){
        var token= localStorage.getItem("api_token");
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' + token);
        this.http.post('https://girlsinc.azurewebsites.net' + '/api/assignments',
            {
                AssignmentId : 102,
                AssignmentName: 'budget exercise',
                AssignmentData: JSON.stringify(this.table),
                ProjectNumber: this.selectedItem['menuItem']['project'],
                SessionNumber:  this.selectedItem['menuItem']['session'],
                PageNumber:  this.selectedItem['page']
            },
            {headers: headers}
        ).subscribe(res => {
            this.isSubmitted = true;
            let toast = this.toastController.create({
                message: 'Your assignment was saved successfully!',
                duration: 2000,
                cssClass: 'little-positive-toast'
            });
            toast.present();
        });
    }
    createNote(){
        this.modalService.showAddNotePopup();
    }

}
