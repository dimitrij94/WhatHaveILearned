/**
 * Created by Dmitrij on 26.01.2017.
 */
import {Injectable} from "@angular/core";
import {MOCK_USER_INTEREST} from "./mock-user-interest";
import {AuthenticationService} from "../authentication/authentication.service";
import {UserInterest} from "./user-interest";
import {Resolve, RouterStateSnapshot, ActivatedRouteSnapshot} from "@angular/router";
import {Observable} from "rxjs/Rx";
@Injectable()
export class UserInterestService {

  public getUserInterest(user_id:number, interest_id:number) {
    return Promise.resolve(MOCK_USER_INTEREST);
  }

  public findInterest(interests:Array<UserInterest>, id:number):UserInterest {
    return interests.find((interest:UserInterest)=>interest.id === id);
  }
}
