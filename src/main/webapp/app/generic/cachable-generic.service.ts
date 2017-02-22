import {CacheableEntity} from "./cacheable-entity";
/**
 * Created by Dmitrij on 19.02.2017.
 */
const cacheUpdateTime:number = 60 * 60 * 1000;
export abstract class CachableGenericService<T extends CacheableEntity> {
  private cache:{} = {};

  protected abstract getAllById(ids:number[]):Promise<T[]>;

  protected abstract getById(id:number):Promise<T>;

  protected abstract getCache():{};

  constructor() {
    setTimeout(()=> {
      this.cleanCache();
    }, cacheUpdateTime);
  }

  private cleanCache() {
    for (let id in this.cache) {
      this.cache[id].deprecated() && delete this.cache[id];
    }
  }

  public cacheValue(value:T):void {
    value.date_added = Date.now();
    this.getCache()[value.id] = value;
  }

  protected getFromCache(id:number):T {
    let cachedValue = this.getCache()[id];
    if (cachedValue)
      cachedValue.date_added = Date.now();
    return cachedValue;
  }

  private getAndCache(id:number, callback:(result:T)=>any) {
    this.getById(id).then((result:T)=> {
      this.cacheValue(result);
      callback(result);
    });
  }


  protected getAll(ids:number[], callback:(result:T[])=>any, force_reset:boolean = false):void {
    if (force_reset)
      this.getAllById(ids).then((value:T[])=> {
        value.forEach((v:T)=>this.cacheValue(v));
        callback(value);
      });
    else {
      let ids_left:number[] = [];
      let values_cached:T[] = [];
      ids.forEach((id:number)=> {
        let v:T = this.getFromCache(id);
        if (v)values_cached.push(v);
        else ids_left.push(id);
      });
      this.getAllById(ids_left).then((result:T[])=>callback(result.concat(values_cached)));
    }
  }

  protected get(id:number, callback:(result:T)=>any, force_reset:boolean = false):void {
    if (force_reset) {
      this.getAndCache(id, callback);
    }
    else {
      let cached_value = this.getFromCache(id);
      if (cached_value) {
        callback(cached_value);
      }
      else {
        this.getAndCache(id, callback);
      }
    }
  }

}
