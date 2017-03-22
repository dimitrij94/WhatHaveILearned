import {NgModule, LOCALE_ID} from "@angular/core";
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
import {UserProgressService} from "./user-progress/user-progress-service";
import {MyRoutingService} from "./my-routing.service";
import {LearningSessionModule} from "./learning-session/learing-session.module";

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
    LearningSessionModule,
    UserModule
  ],
  exports:[],
  providers: [{provide:LOCALE_ID, useValue:'uk-UA'}, UserProgressService, MyRoutingService],
  declarations: [AppComponent, MyPageNotFoundComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
