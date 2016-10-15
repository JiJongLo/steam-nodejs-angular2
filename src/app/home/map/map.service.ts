import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MapService {
  constructor(public http:Http) {
    System.import('path/to/your/module').then(refToLoadedModule => {
        refToLoadedModule.someFunction();
      }
    )
  };

  Apikey:String = 'AIzaSyD8JwwhAGp7e8NcYydH1ZjjF-H7Z_AYExc';

  setCoords(coords:Array, markers:Array) {

    return {};
  }
}

