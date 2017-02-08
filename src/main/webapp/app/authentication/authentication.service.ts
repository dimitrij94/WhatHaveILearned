/**
 * Created by Dmitrij on 26.01.2017.
 */
import {Injectable} from "@angular/core";
import {User} from "../user/user";
import {USER} from "../user/mock-user";

@Injectable()
export class AuthenticationService {
  public user:User;
  public authenticated:boolean = true;

  public getUser():Promise<User>{
    return Promise.resolve(USER);
  }

  private authenticate(email:string, password:string):Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(()=> {
        this.authenticated = true;
        resolve(USER);
      }, 500)
    });
  }
}
