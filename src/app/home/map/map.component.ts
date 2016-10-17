import {Component} from '@angular/core';
import {MapService} from './map.service';
@Component({
  selector: 'map-home',
  styleUrls: ['./map.css'],
  provides: [MapService],
  template: `<div class="map">
                <div id="map"></div>
              </div>`
})
export class Map {
  // Set our default values
  localState = {
    initCoords: [51.594561, 25.345392],
    markers: []
  };
  // TypeScript public modifiers
  constructor(private _mapService:MapService) {
  }
  ngOnInit() {
    this._mapService.setCoords(this.localState.initCoords, this.localState.markers)
  }
}
