import {Component, OnInit} from '@angular/core';
import {AppState} from '../../app.service';
import {Card} from "./card";
@Component({
  selector: 'card-list',  // <home></home>
  styleUrls: ['./card-list.style.css'],
  template: `
        <div class="bloc-content">
            <card *ngFor="let card of cards" [card]="card"></card>     
        </div>`
})
export class CardList implements OnInit {
  constructor(public appState: AppState) {
  }

  cards: Card[] = [];

  ngOnInit() {

  }
}
/**
 * Created by B_i_p_y_C on 16.10.2016.
 */
