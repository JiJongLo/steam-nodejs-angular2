import {Component, OnInit} from '@angular/core';
import {AppState} from '../../app.service';
import {Card} from "./card";
import {CardService} from "./card.service";
import {CardComponent} from "./card.component";

@Component({
    selector: 'card-list',
    declarations: [CardComponent],
    styles: [`
        .bloc-content {
          width: 100%;
          display: -webkit-box;
          display: -moz-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;          
          -webkit-flex-flow: row wrap;
          justify-content: space-around
        }
    `],
    providers: [CardService],
    template: `
        <div class="bloc-content">
            <card-info *ngFor="let card of cards" [card]="card"></card-info>     
        </div>`
})
export class CardList implements OnInit {
    constructor(public appState:AppState, private _cardService:CardService) {
  }

  cards: Card[] = [];

  ngOnInit() {
      this._cardService.getCards()
          .subscribe(
              cards => {
                  this.cards = cards;
                  this._cardService.cards = cards;
              },
              error => console.log(error)
          );
  }
}
/**
 * Created by B_i_p_y_C on 16.10.2016.
 */
