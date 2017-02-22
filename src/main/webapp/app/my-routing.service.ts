import {Injectable} from "@angular/core";
import {Folder} from "./folders/folder";
import {ActivatedRoute} from "@angular/router";
import {UserInterest} from "./interest/user-interest";
/**
 * Created by Dmitrij on 15.02.2017.
 */

@Injectable()
export class MyRoutingService {

  constructor() {

  }

  public getFolderRouterLink(route:ActivatedRoute, folder:Folder) {
    return ['/user/', route.params['user_id'], '/interest/', route.params['interest_id'], '/folder/', folder.id];
  }

  public getInterestRoutingLink(route:ActivatedRoute, interest:UserInterest) {
    return ['/user/', route.params['user_id'], '/interest/', interest.id];
  }

  public getUserHomeRoutingLink() {
    return ['/user/home'];
  }
}
