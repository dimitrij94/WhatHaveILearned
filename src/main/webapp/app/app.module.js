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
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var app_routing_module_1 = require("./app-routing.module");
var my_page_not_found_component_1 = require("./my-page-not-found.component");
var material_1 = require("@angular/material");
var folder_module_1 = require("./folders/folder.module");
var common_1 = require("@angular/common");
require("hammerjs");
var my_navigation_module_1 = require("./navigation/my-navigation.module");
var user_interest_module_1 = require("./interest/user-interest.module");
var authentication_module_1 = require("./authentication/authentication.module");
var user_module_1 = require("./user/user.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule,
                material_1.MaterialModule.forRoot(),
                folder_module_1.FolderModule,
                app_routing_module_1.AppRoutingModule,
                my_navigation_module_1.MyNavigationModule,
                user_interest_module_1.UserInterestModule,
                authentication_module_1.AuthenticationModule,
                user_module_1.UserModule
            ],
            exports: [],
            providers: [],
            declarations: [app_component_1.AppComponent, my_page_not_found_component_1.MyPageNotFoundComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map