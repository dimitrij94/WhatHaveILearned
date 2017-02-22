/**
 * Created by Dmitrij on 26.01.2017.
 */
import {Injectable} from "@angular/core";
import {MOCK_USER_INTEREST} from "./mock-user-interest";
import {UserInterest} from "./user-interest";
import {Breadcrumb} from "../breadcrumb/breadcrumb";
import {ActivatedRoute} from "@angular/router";
import {BreadcrumbService} from "../breadcrumb/breadcrumb.service";
import {CachableGenericService} from "../generic/cachable-generic.service";

@Injectable()
export class UserInterestService extends CachableGenericService<UserInterest> {

  private cache:{}={};

  constructor(private breadcrumbService:BreadcrumbService) {
    super();
  }


    protected getCache():{} {
      return this.cache;
    }

    protected getById(id:number):Promise<UserInterest> {
    let mock_interest = MOCK_USER_INTEREST;
    mock_interest.folders = [];
    return new Promise((resolve)=>setTimeout(()=>resolve(mock_interest), 1000));
  }

  protected getAllById(ids:number[]):Promise<UserInterest[]> {
    return new Promise((resolve)=>setTimeout(()=>resolve([MOCK_USER_INTEREST]), 1000));
  }

  private getAndCacheUserInterestById(user_id:number, id:number, callback:(result:UserInterest)=>any) {
    new Promise((resolve)=> {
      setTimeout(()=> {
        resolve(MOCK_USER_INTEREST);
      }, 1000);
    }).then((user_interest:UserInterest)=>{
      super.cacheValue(MOCK_USER_INTEREST);
      callback(user_interest);
    });
  }

  public getUserInterest(user_id:number, id:number, callback:(result:UserInterest)=>any, force_reset:boolean = false):void {
    if (force_reset) {
      this.getAndCacheUserInterestById(user_id, id, callback);
    }
    else {
      let userInterest:UserInterest = super.getFromCache(id);
      if (userInterest)
        callback(userInterest);
      else
        this.getAndCacheUserInterestById(user_id, id, callback);
    }
  }

  public getBreadcrumbs(route:ActivatedRoute, interest:UserInterest):Array<Breadcrumb> {
    return this.breadcrumbService.getInterestBreadcrumbs(route, interest);
  }


}
