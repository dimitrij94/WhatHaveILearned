/**
 * Created by Dmitrij on 07.03.2017.
 */
import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import {Folder} from "../folder";
import {ActivatedRoute, Params} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {FolderService} from "../folder.service";
import {Card} from "../../card/card";
import {GenericShuffleAnimationComponent} from "../../animations/shuffle-animation/generic-shuffle-animation.component";
import {ShuffleCardsTrigger} from "../../animations/shuffle-animation/shuffle-cards.trigger";

@Component({
  selector: 'folder-editor',
  moduleId: module.id,
  templateUrl: './folder-edit-component.html',
  animations: [ShuffleCardsTrigger.getShuffleAnimationTrigger("shuffleCardsAnimation")]
})

export class FolderEditComponent extends GenericShuffleAnimationComponent<Card> implements OnInit {
  private folder:Folder;
  public numCards:number;
  private selectedCardsQueue:Card[];
  private element:HTMLElement;

  constructor(private route:ActivatedRoute,
              private folderService:FolderService,
              private changeDetectorRef:ChangeDetectorRef) {
    super(changeDetectorRef);
  }


  public getSelectedCardsQueue():Card[] {
    return this.selectedCardsQueue;
  }

  public getPlaceholderCard():Card {
    return new Card();
  }


  public getCards():Card[] {
    return this.folder.cards;
  }


  public setSelectedCardsQueue(cardes:Card[]):void {
    this.selectedCardsQueue = cardes;
  }

  private getAnimationState(index:number) {
    if (this.selectedCardsQueue.length == 2) {
      switch (index) {
        case 0:
          return 'active';
        case 1:
          return 'next';
      }
    }
    else {
      switch (index) {
        case 0:
          return "previous";
        case 1:
          return "active";
        case 2:
          return "next";
      }
    }
  }

  public ngOnInit() {
    this.route.params.switchMap((params:Params)=>
      this.folderService.get(+params['folder_id'])
    ).subscribe((folder:Folder)=> {
      let numCards = folder.cards.length;
      this.selectedCardsQueue = folder.cards.slice(numCards >= 3 ? -3 : 0, numCards);
      this.folder = folder;
    });
  }

  /*
   private createNewCard(card:Card) {
   this.orientation = "next";
   this.changeDetectorRef.detectChanges();
   let index = this.folder.cards.indexOf(card);
   this.folder.cards.push(this.getPlaceholderCard());
   this.selectedCard = this.folder.cards[index + 1];
   }

   private goToCardWithIndex(index:number) {
   let currentIndex = this.folder.cards.indexOf(this.selectedCard);
   this.orientation = currentIndex < index ? "next" : "previous";
   this.changeDetectorRef.detectChanges();
   this.selectedCard = this.folder.cards[index];
   }

   private goToNextCard() {
   this.orientation = 'next';
   this.changeDetectorRef.detectChanges();
   let index = this.folder.cards.indexOf(this.selectedCard);
   this.selectedCard = this.folder.cards[index + 1] ? this.folder.cards[index + 1] : this.folder.cards[0];
   }

   private goToPreviousCard() {
   this.orientation = 'previous';
   this.changeDetectorRef.detectChanges();
   let index = this.folder.cards.indexOf(this.selectedCard);
   this.selectedCard = this.folder.cards[index - 1] ? this.folder.cards[index - 1] : this.folder.cards[this.folder.cards.length];
   }
   */


}
