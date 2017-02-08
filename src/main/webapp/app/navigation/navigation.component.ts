/**
 * Created by Dmitrij on 26.01.2017.
 */
import {Component, Input} from "@angular/core";
import {User} from "../user/user";
@Component({
  selector: 'my-navigation',
  template: `
<md-toolbar>
    <span>What have i learned</span>
</md-toolbar>
<md-list dense>
    <my-directory [active-user]="user"></my-directory>
</md-list>
`
})
export class NavigationComponent {
  @Input('active-user')
  private user:User;
}
