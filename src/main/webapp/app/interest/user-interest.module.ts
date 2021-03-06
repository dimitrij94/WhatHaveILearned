/**
 * Created by Dmitrij on 26.01.2017.
 */

import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {UserInterestComponent} from "./user-interest.component";
import {UserInterestService} from "./user-interest.service";
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";
import {MaterialModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {FlexLayoutModule} from "@angular/flex-layout";
@NgModule({
  imports: [CommonModule, FlexLayoutModule, BreadcrumbModule, RouterModule, MaterialModule.forRoot()],
  exports: [UserInterestComponent],
  declarations: [UserInterestComponent],
  providers: [UserInterestService]
})
export class UserInterestModule {

}
