import {User} from "../user/user";
import {Folder} from "../folders/folder";
import {LearningSession, CardLearningStatus} from "../learning-session/learning-session";

/**
 * Created by Dmitrij on 29.01.2017.
 */

export class UserProgress {
  public percentMastered:number;
  public percentPracticed:number;

  constructor(public user:User,
              public folder:Folder,
              public learningSessions:Array<LearningSession>) {
    //if any of percentages of progress are not calculated and user has sufficient amount of learning sessions -> recalculate
    //if (!(this.percentMastered || this.percentPracticed) && this.learningSessions.length >= 2)
    //this.parseSessions();
  }


  public parseSessions():{} {
    let cardsProgress:any = {};
    //initializing map of zeros for each card id
    this.folder.cards.map((card)=>cardsProgress[card.id] = 0);

    let learningSessions = this.learningSessions;

    for (let i = 1; i < learningSessions.length; i++) {
      for (let cardId in learningSessions[i].cardsStatuses) {
        if (learningSessions[i - 1].cardsStatuses.hasOwnProperty(cardId) &&
          learningSessions[i - 1].cardsStatuses[cardId] == CardLearningStatus.REMEMBERED) {
          cardsProgress[cardId]++;
        }
      }
    }
    return cardsProgress;
  }

  public estimateProgress(cardsProgress:{}) {
    let num_cards = this.folder.cards.length;
    let num_mastered = 0;
    let num_practiced = 0;

    /*let masteredCardsKeys = Object.keys(cardsProgress).filter((value)=>cardsProgress[value] >= 3);
     this.percentMastered = masteredCardsKeys.length / num_cards;

     let practicedCardsKeys = Object.keys(cardsProgress).filter((value)=>cardsProgress[value] >= 1 && cardsProgress[value] < 3);
     this.percentPracticed = practicedCardsKeys.length/num_cards;
     */

    for (let cardId in cardsProgress) {
      if (cardsProgress[cardId] >= 3) {
        num_mastered++;
      }
      else if (cardsProgress[cardId] == 2) {
        num_practiced++;
      }
    }
    this.percentPracticed = num_practiced / num_cards;
    this.percentMastered = num_mastered / num_cards;
    return {"practiced": num_practiced, "mastered": num_mastered};
  }
}
