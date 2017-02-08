import {NgModule} from "@angular/core";
import {BreadcrumbComponent} from "./breadcrumb.component";
import {MaterialModule} from "@angular/material";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

/**
 * Created by Dmitrij on 02.02.2017.
 */
@NgModule({
  imports:[MaterialModule, CommonModule, RouterModule],
  exports:[BreadcrumbComponent],
  declarations:[BreadcrumbComponent]
})
export class BreadcrumbModule{

}
