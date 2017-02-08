/**
 * Created by Dmitrij on 26.01.2017.
 */
import {Component, OnInit} from "@angular/core";
import {Location} from "@angular/common"
import {AuthenticationService} from "../authentication/authentication.service";
import {User} from "./user";
import {Breadcrumb} from "../breadcrumb/breadcrumb";
@Component({
  selector: 'user-home',
  moduleId: module.id,
  templateUrl: './user-home.component.html'
})
export class UserHomeComponent implements OnInit {
  public user:User;
  private breadcrumbs:Array<Breadcrumb> = [{name: "HOME", href: ['/user', '/home']}];

  constructor(private authService:AuthenticationService, private location:Location) {

  }

  ngOnInit() {
    if (this.authService.authenticated)
      this.authService.getUser().then( (user:User) => this.user = user);
    else this.location.go('/login')
  }
}
