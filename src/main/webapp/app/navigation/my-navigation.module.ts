/**
 * Created by Dmitrij on 26.01.2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {DirectoryComponent} from "./directory.component";
import {MaterialModule} from "@angular/material";
import {NavigationComponent} from "./navigation.component";
import {RouterModule} from "@angular/router";
@NgModule({
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [DirectoryComponent, NavigationComponent],
  declarations: [DirectoryComponent, NavigationComponent],
  providers: []
})
export class MyNavigationModule {

}
