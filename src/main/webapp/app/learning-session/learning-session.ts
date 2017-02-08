import {User} from "../user/user";
import {Folder} from "../folders/folder";
export enum LearningSessionStatus{
  TAKEN, FINISHED, FAILED, NOT_TAKEN
}
export enum CardLearningStatus{
  REMEMBERED, FORGOTTEN
}

const daysPlusToEachSession = [1, 7, 30, 90];

/**
 * Created by Dmitrij on 23.01.2017.
 */
export class LearningSession {

  public sessionDate:Date;
  public nextSessionDate:Date;
  public cardsStatuses:{};

  constructor(public studied:number,
              public status:LearningSessionStatus,
              public remembered:number,
              public user:User,
              public folder:Folder) {

    this.sessionDate = new Date(studied);
  }

}
