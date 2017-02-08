import {Card} from "../card/card";
import {LearningSession} from "../learning-session/learning-session";
import {UserInterest} from "../interest/user-interest";
/**
 * Created by Dmitrij on 12.01.2017.
 */
export class Folder {
  constructor(public id:number,
              public title:string,
              public cards:Card[],
              public learningSessions:Array<LearningSession>,
              public interest:UserInterest) {
  }
}
