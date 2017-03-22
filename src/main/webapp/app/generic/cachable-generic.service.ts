import {CacheableEntity} from "./cacheable-entity";
/**
 * Created by Dmitrij on 19.02.2017.
 */
const cacheUpdateTime:number = 60 * 60 * 1000;
export abstract class CachableGenericService<T extends CacheableEntity> {

  protected abstract getAllById(ids:number[]):Promise<T[]>;

  protected abstract getById(id:number):Promise<T>;

  protected abstract getCache():{};

  constructor() {
    setTimeout(()=> {
      this.cleanCache();
    }, cacheUpdateTime);
  }

  private cleanCache() {
    for (let id in this.getCache()) {
      this.getCache()[id].deprecated() && delete this.getCache()[id];
    }
  }

  public cacheValue(value:T):void {
    value.date_added = Date.now();
    this.getCache()[value.id] = value;
  }

  public getFromCache(id:number):T {
    let cachedValue = this.getCache()[id];
    if (cachedValue)
      cachedValue.date_added = Date.now();
    return cachedValue;
  }

  public cacheAll(values:T[]) {
    values.forEach((v:T)=> {
      this.cacheValue(v);
    })
  }

  public getAllFromCache(ids:number[]):{ids_left:number[], values_found:T[]} {
    let ids_left:number[] = [];
    let values_found:T[] = [];
    ids.forEach((id:number)=> {
      let value = this.getFromCache(id);
      if (value) values_found.push(value);
      else ids_left.push(id);
    });
    return {ids_left: ids_left, values_found: values_found};
  }

  public getAll(ids:number[], force_reset:boolean = false):{found_in_cache:T[], fetched:Promise<T[]>} {
    let found_in_cache:T[] = [];
    if (force_reset)
      return {fetched: this.getAllById(ids), found_in_cache: found_in_cache};
    else {
      let cached_search_result = this.getAllFromCache(ids);
      return {
        found_in_cache: cached_search_result.values_found,
        fetched: this.getAllById(cached_search_result.ids_left)
      };
    }
  }

  public get(id:number, force_reset:boolean = false):Promise<T> {
    if (force_reset) {
      return this.getById(id);
    }
    else {
      let cached_value = this.getFromCache(id);
      if (cached_value) {
        return Promise.resolve(cached_value);
      }
      else {
        return this.getById(id);
      }
    }
  }

}
