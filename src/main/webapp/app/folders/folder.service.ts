/**
 * Created by Dmitrij on 12.01.2017.
 */
import {Injectable} from "@angular/core";
import {FOLDER} from "./mock-folder";
import {Folder} from "./folder";
import {UserInterestService} from "../interest/user-interest.service";
import {CachableGenericService} from "../generic/cachable-generic.service";


@Injectable()
export class FolderService extends CachableGenericService<Folder> {

  private cache:{} = {};

  constructor(private interestService:UserInterestService) {
    super();
  }

  public getFolderNextLearningSessionDate(folder:Folder){
      return "10Hr"
  }

  protected getAllById(ids:number[], include_cards:boolean = false):Promise<Folder[]> {
    return new Promise((resolve) => {
      setTimeout(()=>resolve([FOLDER]), 1000)
    });
  }

  protected getById(id:number, include_cards:boolean = false):Promise<Folder> {
    return new Promise((resolve) => {
      setTimeout(()=>resolve(FOLDER), 1000)
    });
  }


    protected getCache():{} {
      return this.cache;
    }

    public get(id:number, callback:(result:Folder)=>any, force_reset:boolean = false):void {
    super.get(id, callback, force_reset);
  }

  public getAll(ids:number[], callback:(result:Folder[])=>any, force_reset:boolean = false, include_cards:boolean = false):void {
    if (force_reset) {
      this.getAllById(ids, include_cards).then((value:Folder[])=> {
        value.forEach((f:Folder)=>super.cacheValue(f));
        callback(value);
      });
    }
    else {
      let ids_left:number[] = [];
      let folders_cached:Folder[]= [];
      ids.forEach((id:number)=> {
        let v = super.getFromCache(id);
        if (v) folders_cached.push(v);
        else ids_left.push(id);
      });

      this.getAllById(ids_left, include_cards).then((retrieved_folders:Folder[])=>{
        retrieved_folders.forEach((retrieved_folder:Folder)=>super.cacheValue(retrieved_folder));
        callback(retrieved_folders.concat(folders_cached));
      });

    }
  }

}
