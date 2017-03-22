/**
 * Created by Dmitrij on 12.01.2017.
 */
export class Card {
  public task:string;
  public answer:string;
  public question:string;
  public hint:string;

  constructor(public id:number,
              public title:string) {

  };
}
