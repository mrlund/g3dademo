import {Page, NavController} from 'ionic-angular';
import {ProgressProvider} from '../../providers/progressProvider';
import {ContentItem} from '../../models/content-item';

@Page({
  templateUrl: 'build/pages/welcome-page/welcome-page.html'
})
export class WelcomePage {
  continueFrom: ContentItem;
  
  constructor(private nav: NavController, private progress: ProgressProvider){
    
  }
  
  ngOnInit() {
    this.continueFrom = this.progress.getLastPage();
  }
  navigateTo(page: ContentItem){
    let pages = new Array<any>();
    let loopPage: ContentItem = page;
    while (loopPage.prevItem) {
          pages.push({page: loopPage.prevItem.componentType, params: { item: loopPage.prevItem }});
          loopPage = loopPage.prevItem;
    }
    pages.reverse().push({page: page.componentType, params: { item: page }});
    
    this.nav.setPages(pages)
  }
}
