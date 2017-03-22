import {Card} from "../card/card";
import {LearningSession} from "../learning-session/learning-session";
import {UserInterest} from "../interest/user-interest";
import {UserProgress} from "../user-progress/user-progress";
import {CacheableEntity} from "../generic/cacheable-entity";
/**
 * Created by Dmitrij on 12.01.2017.
 */
export class Folder extends CacheableEntity{
  public userProgress:UserProgress;
  public lastLearningSessionDate?:string;
  constructor(public id:number,
              public title:string,
              public cards?:Card[],
              public learningSessions?:Array<LearningSession>,
              public interest?:UserInterest) {
    super(id);
  }
}
