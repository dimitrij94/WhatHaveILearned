/**
 * Created by Dmitrij on 16.01.2017.
 */

import {Component, Input} from "@angular/core";
import {Card} from "./card";

@Component({
  templateUrl: "card.component.html",
  moduleId: module.id,
  selector:'myCard'
})
export class CardComponent{
  @Input() card:Card;

}
