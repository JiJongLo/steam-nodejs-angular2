import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MapService {
  constructor(public http: Http) {
  };

  setCoords(coords:Array, markers:Array) {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: coords[0], lng: coords[1]}
    });
    var marker = new google.maps.Marker({
      position: {lat: coords[0], lng: coords[1]},
      map: map,
      title: 'Uluru (Ayers Rock)'
    });
    directionsDisplay.setMap(map);
  }
}

