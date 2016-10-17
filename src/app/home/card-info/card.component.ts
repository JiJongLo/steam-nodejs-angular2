/**
 * Created by B_i_p_y_C on 16.10.2016.
 */
import {Component, Input} from "@angular/core";
import {Card} from "./card";

@Component({
  selector: 'card-info',
  template: `
             <div class="bloc1">
                <div class="image" [ngStyle]="{'background-image': 'url(../../../assets/img/' + card.image + ')'}">
                <img src="../../../assets/img/shadow.png" alt="" width="100%" height="100%">
                    <div class="image-info">
                        <p><a href="#q1"> <img class="img-fb" src="../../../assets/img/social_fb_facebook_14206.png" alt=""></a>
                        <span> {{ card.timeLaying }}</span>
                        <a href="#qw1"><img class="img-love" src="../../../assets/img/love.png" alt=""></a> </p>
                    </div>
                </div>
                <div class="text-content">
                <h2>{{ card.title }}</h2>
                <p>{{ card.organizers }} <br>
                    <span>{{ card.place }}</span>  </p>
                    <p> {{ card.text }}</p>
                </div>
                <div class="bloc-male statistics">
                    <img src="../../../assets/img/men.png" alt="">
                    <p>{{ card.malePercent }}<sub> %</sub><br><span>Male</span></p>
                </div>
                <div class="bloc-female statistics">
                    <img src="../../../assets/img/women.png" alt="">
                    <p>{{ card.femalePercent }}<sub> %</sub><br><span>Male</span></p>
                </div>
            </div>
    `,
  styleUrls: ['./cardsList.style.css']
})
export class CardComponent {
  constructor() {
  }

  @Input() card:Card;
}
