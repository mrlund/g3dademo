import {NavController, MenuController} from 'ionic-angular';
import {Component} from '@angular/core';
import {ProgressProvider} from '../../providers/progressProvider';
import {MenuItem} from '../../models/menu-item';

@Component({
    templateUrl: 'course-index-page.html'
})
export class CourseIndexPage {
    public courseContent: Array<MenuItem>;

    constructor(public nav: NavController, public progress: ProgressProvider,
                public menu: MenuController) {

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
