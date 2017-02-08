import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {AppRoutingModule} from "./app-routing.module";
import {MyPageNotFoundComponent} from "./my-page-not-found.component";
import {MaterialModule} from "@angular/material";
import {FolderModule} from "./folders/folder.module";
import {CommonModule} from "@angular/common";
import "hammerjs";
import {MyNavigationModule} from "./navigation/my-navigation.module";
import {UserInterestModule} from "./interest/user-interest.module";
import {AuthenticationModule} from "./authentication/authentication.module";
import {UserModule} from "./user/user.module";

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    MaterialModule.forRoot(),
    FolderModule,
    AppRoutingModule,
    MyNavigationModule,
    UserInterestModule,
    AuthenticationModule,
    UserModule
  ],
  exports:[],
  providers: [],
  declarations: [AppComponent, MyPageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
