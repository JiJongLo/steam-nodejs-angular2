/**
 * Created by B_i_p_y_C on 16.10.2016.
 */
export class Card {
  image: string;
  timeLaying: string;
  title:string;
  text: string;
  organizers: string;
  place: string;
  malePercent: number;
  femalePercent: number;

  constructor(image:string, timeLaying:string, title:string, text:string, organizers:string, place:string, malePercent:number, femalePercent:number) {
    this.image = image;
    this.timeLaying = timeLaying;
    this.title = title;
    this.text = text;
    this.organizers = organizers;
    this.place = place;
    this.malePercent = malePercent;
    this.femalePercent = femalePercent;
  }
}
