/**
 * Created by Dmitrij on 11.02.2017.
 */
import {Injectable} from "@angular/core";
import {CardLearningStatus} from "../learning-session/learning-session";
import {Folder} from "../folders/folder";
import {UserProgress} from "./user-progress";
import {User} from "../user/user";
@Injectable()
export class UserProgressService {

  public parseSessions(folder:Folder):{} {
    let cardsProgress:any = {};
    //initializing map of zeros for each card id
    folder.cards.map((card)=>cardsProgress[card.id] = 0);

    let learningSessions = folder.learningSessions;

    for (let i = 1; i < learningSessions.length; i++) {
      for (let cardId in learningSessions[i].cardsStatuses) {
        if (learningSessions[i - 1].cardsStatuses.hasOwnProperty(cardId))
          if (learningSessions[i - 1].cardsStatuses[cardId] == CardLearningStatus.REMEMBERED) {
            cardsProgress[cardId]++;
          }
          else cardsProgress[cardId] = 0;

      }
    }
    return cardsProgress;
  }


  public estimateProgress(folder:Folder, user:User) {
    let userProgress = new UserProgress(user, folder, this.parseSessions(folder));
    userProgress.cardProgress = this.parseSessions(folder);
    let num_cards = userProgress.folder.cards.length;
    let num_mastered = 0;
    let num_practiced = 0;

    for (let cardId in userProgress.cardProgress) {
      if (userProgress.cardProgress[cardId] >= 3) {
        num_mastered++;
      }
      else if (userProgress.cardProgress[cardId] == 2) {
        num_practiced++;
      }
      else if (userProgress.cardProgress[cardId] == 1) {
        //add something later
      }
    }

    userProgress.percentMastered = (num_mastered / num_cards) * 100;
    userProgress.percentPracticed = (num_practiced / num_cards) * 100;
    return userProgress;
  }
}
