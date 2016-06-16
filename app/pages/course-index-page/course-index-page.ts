import {Page, NavController, MenuController} from 'ionic-angular';
import {ProgressProvider} from '../../providers/progressProvider';
import {ContentItem} from '../../models/content-item';
import {MenuItem} from '../../models/menu-item';

@Page({
  templateUrl: 'build/pages/course-index-page/course-index-page.html'
})
export class CourseIndexPage {
  private courseContent: Array<MenuItem>;
  constructor(private nav: NavController, private progress: ProgressProvider,
  private menu: MenuController
  ){
    
  }
  
  ngOnInit() {
    this.courseContent = this.progress.getCourseContent();
  }
      toggleMenu() {
        if (this.menu.isOpen()) {
            this.menu.close();
        } else {
            this.menu.open();
        }
    }
}
