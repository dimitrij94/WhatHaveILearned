import {User} from "../user/user";
import {Folder} from "../folders/folder";

/**
 * Created by Dmitrij on 29.01.2017.
 */

export class UserProgress {
  public percentMastered:number;
  public percentPracticed:number;
  public hoursToNextLearningSession:number;

  constructor(public user:User,
              public folder:Folder,
              public cardProgress:{}) {

  }


}
