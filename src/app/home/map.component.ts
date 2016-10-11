import {Component} from '@angular/core';

import {AppState} from '../app.service';
import {Title} from './title';
import {XLarge} from './x-large';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'map-home',  // <home></home>

  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./map.style.css'],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.template.html'
})
export class Home {
  // Set our default values
  localState = {
    currentCoords: {
      lat: Date
    }
  };
  // TypeScript public modifiers
  constructor(public appState:AppState, public title:Title) {

  }

  ngOnInit() {
    // console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value:string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }
}
