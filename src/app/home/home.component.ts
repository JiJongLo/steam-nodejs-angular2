import { Component } from '@angular/core';
import { AppState } from '../app.service';
import {Map} from './map';
import {MapService} from './map/map.service';

@Component({
  selector: 'home',  // <home></home>
  providers: [
    MapService
  ],
  styleUrls: [ './home.style.css' ],
  declarations: [
    Map
  ],
  templateUrl: './home.template.html'
})
export class Home {
  localState = { value: '' };

  constructor(public appState: AppState) {

  }

  ngOnInit() {
    // console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }
}
