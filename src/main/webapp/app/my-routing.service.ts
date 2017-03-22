import {Injectable} from "@angular/core";
/**
 * Created by Dmitrij on 15.02.2017.
 */

@Injectable()
export class MyRoutingService {

  constructor() {

  }

  public getFolderRouterLink(user_id:number, interest_id:number, folder_id:number) {
    return ['/user', user_id, 'interest', interest_id, 'folder', folder_id];
  }

  public getInterestRoutingLink(interest_id:number, user_id:number) {
    return ['/user', user_id, 'interest', interest_id];
  }

  public getUserHomeRoutingLink() {
    return ['/user','home'];
  }

  public getFolderEditRouterLink(user_id:number, interest_id:number, folder_id:number) {
    return this.getFolderRouterLink(user_id, interest_id, folder_id).concat('edit');
  }

  public getFolderShuffleRouterLink(user_id:number, interest_id:number, folder_id:number) {
    return this.getFolderRouterLink(user_id, interest_id, folder_id).concat('shuffle');
  }
}
