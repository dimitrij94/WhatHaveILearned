/**
 * Created by Dmitrij on 26.01.2017.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserInterestComponent} from "./user-interest.component"
import {UserInterestService} from "./user-interest.service";
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
@NgModule({
  imports: [CommonModule, BreadcrumbModule, RouterModule, MaterialModule],
  exports: [UserInterestComponent],
  declarations: [UserInterestComponent],
  providers: [UserInterestService]
})
export class UserInterestModule {

}
