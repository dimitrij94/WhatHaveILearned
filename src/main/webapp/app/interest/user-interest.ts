import {Folder} from "../folders/folder";
import {CacheableEntity} from "../generic/cacheable-entity";
/**
 * Created by Dmitrij on 23.01.2017.
 */
export class UserInterest extends CacheableEntity {

  constructor(public id:number,
              public folders:Array<Folder>,
              public name:string) {
    super(id);
  }


}
