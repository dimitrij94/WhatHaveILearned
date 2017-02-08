import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {Breadcrumb} from "./breadcrumb/breadcrumb";
import {AuthenticationService} from "./authentication/authentication.service";
import {User} from "./user/user";

import {Location} from "@angular/common";
@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  private user:User;
  private breadcrumbs:Array<Breadcrumb> = [
    {
      name: "HOME",
      href: ["/user/home"]
    }
  ];

  constructor(private location:Location, private authService:AuthenticationService) {
  }

  ngOnInit():void {
    if (this.authService.authenticated)
      this.authService.getUser().then((user)=>this.user = user);
    else
      this.location.go("/login");
  }

  showAuthError(error:any):void {

  }

}
