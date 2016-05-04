import {Page, NavController, NavParams, MenuController} from 'ionic-angular';
import {ContentData} from '../../providers/contentProvider';
import {WelcomePage} from '../welcome-page/welcome-page';

@Page({
  templateUrl: 'build/pages/discussion-page/discussion-page.html',
  providers: [ContentData],
  directives: []
})
export class DiscussionPage {
  selectedItem: any;
  pageContent: string; 
  animationName: string;

  constructor(private nav: NavController, navParams: NavParams, content: ContentData, private menu: MenuController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

  }
  toggleMenu(){
      if (this.menu.isOpen())
      {
          this.menu.close();
      } else {
          this.menu.open();
      }
  }
  navigateBackTo(page){
        this.nav.pop();
  }  
  navigateForwardTo(page){
      this.nav.push(page.componentType, {item: page});
  }
  finishSession(){
      this.nav.setRoot(WelcomePage);
  }
  
}
