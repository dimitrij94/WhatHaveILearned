/**
 * Created by Dmitrij on 12.01.2017.
 */
import {Injectable} from "@angular/core";
import {FOLDER} from "./mock-folder";
import {Folder} from "./folder";
import {UserInterestService} from "../interest/user-interest.service";
@Injectable()
export class FolderService {

  constructor(private interestService:UserInterestService) {

  }


  public getFolder(folder_id:number):Promise<Folder> {
    return Promise.resolve(FOLDER);
  }

  public findFolder(folders:Array<Folder>, id:number) {
    return folders.find((folder:Folder)=>folder.id === id);
  }
}
