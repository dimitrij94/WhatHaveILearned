/**
 * Created by Dmitrij on 17.01.2017.
 */
import {Injectable} from "@angular/core";
import {USER} from "./mock-user";
@Injectable()
export class UserService {

  getUser() {
    return Promise.resolve(USER);
  }
}
