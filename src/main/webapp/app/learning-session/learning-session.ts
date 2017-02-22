import {User} from "../user/user";
import {Folder} from "../folders/folder";
export enum LearningSessionStatus{
  TAKEN, FINISHED, FAILED, NOT_TAKEN
}
export enum CardLearningStatus{
  REMEMBERED=1, FORGOTTEN=0
}

const daysPlusToEachSession = [1, 7, 30, 90];

/**
 * Created by Dmitrij on 23.01.2017.
 */
export class LearningSession {

  public sessionDate:Date;
  public cardsStatuses:any;

  constructor(public status:LearningSessionStatus,
              public remembered:number,
              public user:User,
              public folder:Folder) {
  }

}
