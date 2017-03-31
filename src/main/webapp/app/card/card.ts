/**
 * Created by Dmitrij on 12.01.2017.
 */
export class Card {
  public id:number;
  public title:string;
  public task:string;
  public answer:string;
  public question:string;
  public hint:string;

  constructor() {
    this.id = null;
    this.title = "";
    this.task = "";
    this.answer = "";
    this.question = "";
    this.hint = "";
  };
}
