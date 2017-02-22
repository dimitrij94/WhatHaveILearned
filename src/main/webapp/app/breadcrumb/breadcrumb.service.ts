import {Injectable} from "@angular/core";
import {UserInterest} from "../interest/user-interest";
import {ActivatedRoute} from "@angular/router";
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

  public getInterestBreadcrumbs(route:ActivatedRoute, interest:UserInterest):Array<Breadcrumb> {
    return [
      {
        name: 'HOME',
        href: this.routingService.getUserHomeRoutingLink()
      },
      {
        name: interest.name,
        href: this.routingService.getInterestRoutingLink(route, interest)
      },
    ]
  }

  getFolderBreadcrumbs(route:ActivatedRoute, folder:Folder, interest:UserInterest) {
    return this.getInterestBreadcrumbs(route, interest).concat(
      [{
        name: folder.title.toUpperCase(),
        href: this.routingService.getFolderRouterLink(route, folder)
      }]
    );
  }
}
