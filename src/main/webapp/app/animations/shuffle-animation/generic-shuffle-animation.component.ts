import {ChangeDetectorRef} from "@angular/core";
/**
 * Created by Dmitrij on 22.03.2017.
 */
export abstract class GenericShuffleAnimationComponent<T> {
  public orientation:string = "none";

  constructor(private changeDetector:ChangeDetectorRef) {
  }

  protected abstract getSelectedCardsQueue():T[];

  protected abstract getCards():T[];

  protected abstract setSelectedCardsQueue(values:T[]):void;

  public nextCard() {
    this.orientation = "next";
    this.changeDetector.detectChanges();
    //remove the first elemet of queue
    this.getSelectedCardsQueue().length > 2 && this.getSelectedCardsQueue().shift();
    //last element of selected cards
    let lastSelectedCard = this.getSelectedCardsQueue()[this.getSelectedCardsQueue().length - 1];
    //if the last selected card is the last card in the array push new card into array of folder cards
    if (this.getCards().indexOf(lastSelectedCard) == this.getCards().length - 1) {
      this.getCards().push(this.getPlaceholderCard());
    }
    //push last card from array of folder cards to the selected cards queue
    this.getSelectedCardsQueue().push(this.getCards()[this.getCards().indexOf(lastSelectedCard) + 1])
  }


  public previousCard():void {
    this.orientation = "previous";
    //presumably should reavalueate the animations
    this.changeDetector.detectChanges();
    //remove the last element of selected cards queue
    this.getSelectedCardsQueue().pop();
    let firstSelectedCard = this.getSelectedCardsQueue()[0];
    let firstCardIndex = this.getCards().indexOf(firstSelectedCard);
    if (firstCardIndex == 0) return;
    let previouseCard = this.getCards()[firstCardIndex - 1];
    //push previouse card at the begining of the array
    this.getSelectedCardsQueue().unshift(previouseCard);
  }

  public goToCard(index:number) {
    let numCards = this.getSelectedCardsQueue().length;
    let activeIndex = Math.ceil(numCards / 2) - 1;
    let indexMargin = Math.floor(numCards / 2);
    this.orientation = this.getCards().indexOf(this.getSelectedCardsQueue()[activeIndex]) - index > 0 ? "previous" : "next";
    this.changeDetector.detectChanges();
    this.setSelectedCardsQueue(this.getCards().slice(index - indexMargin, index + indexMargin));
  }

  public abstract getPlaceholderCard():T;
}
