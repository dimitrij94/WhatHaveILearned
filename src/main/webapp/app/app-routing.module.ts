import {NgModule} from "@angular/core";
import {FolderComponent} from "./folders/folder.component";
import {Routes, RouterModule} from "@angular/router";
import {MyPageNotFoundComponent} from "./my-page-not-found.component";
import {UserInterestComponent} from "./interest/user-interest.component";
import {UserHomeComponent} from "./user/user-home.component";

const appRoutes:Routes = [
  {
    path: '',
    redirectTo: 'user/home',
    pathMatch: 'full'
  },
  {
    path: 'user/:user_id/interest/:interest_id/folder/:folder_id',
    component: FolderComponent
  },
  {
    path: 'user/:user_id/interest/:interest_id',
    component: UserInterestComponent,
  },
  {path: 'user/home', component: UserHomeComponent},
  {path: '**', component: MyPageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
