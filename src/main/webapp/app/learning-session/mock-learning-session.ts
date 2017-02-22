import {LearningSession, LearningSessionStatus} from "./learning-session";
import {USER} from "../user/mock-user";
import {FOLDER} from "../folders/mock-folder";
import {MOCK_CARDS} from "../card/mock-cards";
import {Card} from "../card/card";
/**
 * Created by Dmitrij on 24.01.2017.
 */

class ParseService {
  public static parseFolderCards(cards:Card[]):any {
    let cardStatuses = {};
    for (let i = 0; i < cards.length; i++) {
      cardStatuses[cards[i].id] = 1;
    }
    return cardStatuses;
  }

  public static parse(cardsStatuses:{}):number {
    let remembered = 0;
    let num_cards = 0;
    for (let status in cardsStatuses) {
      if (cardsStatuses[status] == 1)
        remembered++;
      num_cards++;
    }
    return remembered / num_cards;
  }
}

let session1:LearningSession = {
  sessionDate: new Date(Date.now() - 24 * 3600 * 1000),
  status: LearningSessionStatus.TAKEN,
  user: USER,
  folder: FOLDER,
  cardsStatuses: ParseService.parseFolderCards(MOCK_CARDS),
  remembered: ParseService.parse(this.cardStatuses),
};
let session2:LearningSession = {
  sessionDate: new Date(Date.now() - 2*24 * 3600 * 1000),
  status: LearningSessionStatus.TAKEN,
  cardsStatuses: ParseService.parseFolderCards(MOCK_CARDS),
  user: USER,
  folder: FOLDER,
  remembered: ParseService.parse(this.cardStatuses)
};
let session3:LearningSession = {
  sessionDate: new Date(Date.now() - 4*24 * 3600 * 1000),
  status: LearningSessionStatus.TAKEN,
  cardsStatuses: {1:1,2:1,3:0},
  user: USER,
  folder: FOLDER,
  remembered: ParseService.parse(this.cardStatuses)
};
export const MOCK_LEARNING_SESSION:LearningSession[] = [session1, session2];


