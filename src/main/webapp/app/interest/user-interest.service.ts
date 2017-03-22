/**
 * Created by Dmitrij on 26.01.2017.
 */
import {Injectable} from "@angular/core";
import {MOCK_USER_INTEREST} from "./mock-user-interest";
import {UserInterest} from "./user-interest";
import {CachableGenericService} from "../generic/cachable-generic.service";
import {FolderService} from "../folders/folder.service";

@Injectable()
export class UserInterestService extends CachableGenericService<UserInterest> {

  private cache:{} = {};

  constructor(private folderService:FolderService) {
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

  private getUserInterestById(user_id:number, id:number):Promise<UserInterest> {
    return new Promise((resolve)=> {
      setTimeout(()=> {
        resolve(MOCK_USER_INTEREST);
      }, 1000);
    });
  }

  public cacheValue(interest:UserInterest) {
    this.folderService.cacheAll(interest.folders);
    super.cacheValue(interest);
  }

  public getUserInterest(user_id:number, id:number, force_reset:boolean = false):Promise<UserInterest> {
    if (force_reset) {
      this.getUserInterestById(user_id, id);
    }
    else {
      let userInterest:UserInterest = super.getFromCache(id);
      if (userInterest)
        return Promise.resolve(userInterest);
      else
        return this.getUserInterestById(user_id, id);
    }
  }


}
