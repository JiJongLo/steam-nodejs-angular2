import {Component} from '@angular/core';
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'map-home',  // <home></home>

  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: ['./map.scss'],
  styles: [],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: `<div class="map">
                <div id="map"></div>
              </div>`
})
export class Map {
  // Set our default values
  localState = {

  };
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    // console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
