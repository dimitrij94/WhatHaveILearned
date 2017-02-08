import {Folder} from "../folders/folder";
import {User} from "../user/user";
/**
 * Created by Dmitrij on 23.01.2017.
 */
export class UserInterest {
  constructor(public id:number,
              public folders:Array<Folder>,
              public name:string){

  }
}
