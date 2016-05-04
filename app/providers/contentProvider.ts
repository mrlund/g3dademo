import {Injectable, Inject} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class ContentData {
  static get parameters(){
    return [[Http]];
  }

  http: any;
  data: any; 
  private animations:Array<any>;
  
  constructor(http) {
    // inject the Http provider and set to this instance
    this.http = http;
    this.animations = new Array<any>();
  }
  loadQuestions(projectNo, sessionNo, pageName) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('/build/content/project' + projectNo + '/session' + sessionNo + '/' + pageName + '/questions.json').subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        // this.data = this.processData(res.json());
        resolve(res.json());
      });
    });
  }

  loadContent(projectNo, sessionNo, pageName) {
    if (this.data) {
      // already loaded data
      return Promise.resolve(this.data);
    }
    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular Http provider to request the data,
      // then on the response it'll map the JSON data to a parsed JS object.
      // Next we process the data and resolve the promise with the new data.
      this.http.get('/build/content/project' + projectNo + '/session' + sessionNo + '/' + pageName + '/content.html').subscribe(res => {
        // we've got back the raw data, now generate the core schedule data
        // and save the data for later reference
        // this.data = this.processData(res.json());
        resolve(res);
      });
    });
  }
   
   loadAnimation(projectNo, sessionNo, pageName, name) {
    return new Promise(resolve => {
        
        for (var i = 0; i < this.animations.length; i++)
        {
            if (this.animations[i].name == name)
            {
                resolve(this.animations[i].animation);
            }
        }
        var script = document.createElement('script');
        script.src = '/build/content/project' + projectNo + '/session' + sessionNo + '/' + pageName + '/' + name + '.js';
        script.async = false;
        script.onload = function(){
            var newAnimation = { name: name, animation: lib};
            //this.animations.push(newAnimation);
            resolve(newAnimation.animation);
        }
        document.head.appendChild(script);
    });
  }
}