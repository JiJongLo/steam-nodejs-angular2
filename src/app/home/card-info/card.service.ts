import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Observable} from "rxjs/Observable";

import {Card} from "./card";

@Injectable()
export class CardService {
    cards:Card[] = [];

    constructor(private http:Http) {
    }

    getCards() {
        return this.http.get('assets/mock-data/events.json')
            .map(response => {
                const data = response.json();
                let objs:any[] = [];
                for (let i = 0; i < data.length; i++) {
                    let card = new Card(data[i].image, data[i].timeLaying, data[i].title, data[i].text, data[i].organizers, data[i].place, data[i].malePercent, data[i].femalePercent);
                    objs.push(card);
                }
                return objs;
            })
            .catch(error => Observable.throw(error));
    }
}