import {Injectable} from "@angular/core";
import {UserInterest} from "../interest/user-interest";
import {MyRoutingService} from "../my-routing.service";
import {Folder} from "../folders/folder";
import {Breadcrumb} from "./breadcrumb";
/**
 * Created by Dmitrij on 15.02.2017.
 */
@Injectable()
export class BreadcrumbService {
  constructor(private routingService:MyRoutingService) {

  }

  public getInterestBreadcrumbs(interest:UserInterest, user_id:number):Array<Breadcrumb> {
    return [
      {
        name: 'HOME',
        href: this.routingService.getUserHomeRoutingLink()
      },
      {
        name: interest.name,
        href: this.routingService.getInterestRoutingLink(interest.id, user_id)
      },
    ]
  }

  getFolderBreadcrumbs(folder:Folder, interest:UserInterest, folder_id:number, user_id:number) {
    return this.getInterestBreadcrumbs(interest, user_id).concat(
      [{
        name: folder.title.toUpperCase(),
        href: this.routingService.getFolderRouterLink(user_id, interest.id, folder_id)
      }]
    );
  }
}
