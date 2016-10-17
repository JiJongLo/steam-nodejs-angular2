import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';
import {maps} from 'googleMap';
@Injectable()
export class MapService {
  constructor(public http: Http) {
  };

  setCoords(coords:Array, markers:Array) {
    var directionsDisplay = new maps.DirectionsRenderer;
    var map = new maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: coords[0], lng: coords[1]}
    });
    var marker = new maps.Marker({
      position: {lat: coords[0], lng: coords[1]},
      map: map,
      title: 'Uluru (Ayers Rock)'
    });
    directionsDisplay.setMap(map);
  }
}

