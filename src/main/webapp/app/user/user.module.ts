/**
 * Created by Dmitrij on 17.01.2017.
 */

import {NgModule, OnInit} from "@angular/core";
import {UserService} from "./user.service";
import {CommonModule} from "@angular/common";
import {UserHomeComponent} from "./user-home.component";
import {RouterModule} from "@angular/router";
import {MaterialModule} from "@angular/material";
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";
@NgModule({
  imports: [CommonModule, BreadcrumbModule, RouterModule, MaterialModule],
  exports: [UserHomeComponent],
  providers: [UserService],
  declarations: [UserHomeComponent]
})
export class UserModule {
}
