/**
 * Created by Dmitrij on 19.02.2017.
 */
const cache_time = 60*1000;
export abstract class CacheableEntity {
  id:number;
  date_added?:number;
  constructor(id:number){
  }
  public deprecated():boolean {
    return (Date.now() - (this.date_added + cache_time)) > 0
  }
}
