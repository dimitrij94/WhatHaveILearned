import {Folder} from "../folders/folder";
import {UserInterest} from "../interest/user-interest";
/**
 * Created by Dmitrij on 17.01.2017.
 */
export class User {
  constructor(public id:number,
              public name:string,
              public email:string,
              public interests:Array<UserInterest>) {

  }
}
