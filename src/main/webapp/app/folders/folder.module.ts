/**
 * Created by Dmitrij on 10.01.2017.
 */
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FolderComponent} from "./folder-overview/folder.component";
import {MaterialModule} from "@angular/material";
import {FolderService} from "./folder.service";
import {CardModule} from "../card/card-module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {UserModule} from "../user/user.module";
import {RouterModule} from "@angular/router";
import {BreadcrumbModule} from "../breadcrumb/breadcrumb.module";
import {FolderEditComponent} from "./folder-edit-page/folder-edit.component";
@NgModule({
  imports: [
    BreadcrumbModule,
    FlexLayoutModule,
    RouterModule,
    CommonModule,
    MaterialModule.forRoot(),
    CardModule,
    UserModule
  ],
  exports: [FolderComponent],
  declarations: [FolderComponent, FolderEditComponent],
  providers: [FolderService]
})
export class FolderModule {

}
