/**
 * Created by Dmitrij on 26.01.2017.
 */
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
var common_1 = require("@angular/common");
var user_interest_component_1 = require("./user-interest.component");
var user_interest_service_1 = require("./user-interest.service");
var breadcrumb_module_1 = require("../breadcrumb/breadcrumb.module");
var material_1 = require("@angular/material");
var router_1 = require("@angular/router");
var flex_layout_1 = require("@angular/flex-layout");
var UserInterestModule = (function () {
    function UserInterestModule() {
    }
    UserInterestModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, flex_layout_1.FlexLayoutModule, breadcrumb_module_1.BreadcrumbModule, router_1.RouterModule, material_1.MaterialModule.forRoot()],
            exports: [user_interest_component_1.UserInterestComponent],
            declarations: [user_interest_component_1.UserInterestComponent],
            providers: [user_interest_service_1.UserInterestService]
        }), 
        __metadata('design:paramtypes', [])
    ], UserInterestModule);
    return UserInterestModule;
}());
exports.UserInterestModule = UserInterestModule;
//# sourceMappingURL=user-interest.module.js.map