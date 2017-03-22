/**
 * Created by Dmitrij on 12.01.2017.
 */
import {Injectable} from "@angular/core";
import {FOLDER} from "./mock-folder";
import {Folder} from "./folder";
import {CachableGenericService} from "../generic/cachable-generic.service";


@Injectable()
export class FolderService extends CachableGenericService<Folder> {

  private cache:{} = {};

  constructor() {
    super();
  }

  public getFolderNextLearningSessionDate(folder:Folder) {
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

  public cacheValue(value:Folder):void {
    //cache folder cards
    super.cacheValue(value);
  }

  protected getCache():{} {
    return this.cache;
  }


  public getAll(ids:number[],
                force_reset:boolean = false,
                include_cards:boolean = false):{found_in_cache:Folder[], fetched:Promise<Folder[]>} {
    if (force_reset)
      return {found_in_cache: [], fetched: this.getAllById(ids, include_cards)};
    else {
      let cache_results = super.getAllFromCache(ids);
      return {
        found_in_cache: cache_results.values_found,
        fetched: this.getAllById(cache_results.ids_left, include_cards)
      };
    }
  }

}
