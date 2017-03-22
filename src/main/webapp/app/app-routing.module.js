"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var folder_component_1 = require("./folders/folder-overview/folder.component");
var router_1 = require("@angular/router");
var my_page_not_found_component_1 = require("./my-page-not-found.component");
var user_interest_component_1 = require("./interest/user-interest.component");
var user_home_component_1 = require("./user/user-home.component");
var folder_edit_component_1 = require("./folders/folder-edit-page/folder-edit.component");
var appRoutes = [
    {
        path: '',
        redirectTo: 'user/home',
        pathMatch: 'full'
    },
    {
        path: 'user/:user_id/interest/:interest_id/folder/:folder_id',
        component: folder_component_1.FolderComponent
    },
    {
        path: 'user/:user_id/interest/:interest_id/folder/:folder_id/edit',
        component: folder_edit_component_1.FolderEditComponent
    },
    {
        path: 'user/:user_id/interest/:interest_id',
        component: user_interest_component_1.UserInterestComponent,
    },
    { path: 'user/home', component: user_home_component_1.UserHomeComponent },
    { path: '**', component: my_page_not_found_component_1.MyPageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map