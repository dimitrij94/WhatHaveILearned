/**
 * Created by Dmitrij on 23.01.2017.
 */
import {Component, Input, OnInit} from "@angular/core";
import {Directory} from "./directory";
import {User} from "../user/user";
@Component({
  selector: 'my-directory',
  moduleId: module.id,
  templateUrl: './directory.component.html'
})
export class DirectoryComponent implements OnInit {

  @Input('active-user')
  private user:User;
  @Input()
  private directory:Directory;



  ngOnInit():void {
    if (this.user) this.directory = Directory.constructFromUser(this.user);
  }

}
