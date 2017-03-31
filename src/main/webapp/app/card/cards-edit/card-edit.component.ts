/**
 * Created by Dmitrij on 20.03.2017.
 */
import {Component, Input} from "@angular/core";
import {Card} from "../card";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/debounceTime";
import {Subject} from "rxjs/Rx";
@Component({
  selector: 'card-edit',
  moduleId: module.id,
  templateUrl: './card-edit.component.html'
})
export class CardEditComponent {

  @Input('editedCard') private editedCard:Card;
  private debounceSubject:Subject<Card> = new Subject<Card>();

  constructor() {
    this.debounceSubject
      .debounceTime(500 /*ms*/)
      .subscribe((card:Card)=> {
        this.editedCard = card;
      });
  }


  private updateCard(card:Card) {
    this.debounceSubject.next(card);
  }

}
