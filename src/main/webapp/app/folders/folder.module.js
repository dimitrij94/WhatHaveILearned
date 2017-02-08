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
/**
 * Created by Dmitrij on 10.01.2017.
 */
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var folder_component_1 = require("./folder.component");
var material_1 = require("@angular/material");
var folder_service_1 = require("./folder.service");
var card_module_1 = require("../card/card-module");
var flex_layout_1 = require("@angular/flex-layout");
var user_module_1 = require("../user/user.module");
var router_1 = require("@angular/router");
var breadcrumb_module_1 = require("../breadcrumb/breadcrumb.module");
var FolderModule = (function () {
    function FolderModule() {
    }
    FolderModule = __decorate([
        core_1.NgModule({
            imports: [
                breadcrumb_module_1.BreadcrumbModule,
                flex_layout_1.FlexLayoutModule.forRoot(),
                router_1.RouterModule,
                common_1.CommonModule,
                material_1.MaterialModule.forRoot(),
                card_module_1.CardModule,
                user_module_1.UserModule
            ],
            exports: [folder_component_1.FolderComponent],
            declarations: [folder_component_1.FolderComponent],
            providers: [folder_service_1.FolderService]
        }), 
        __metadata('design:paramtypes', [])
    ], FolderModule);
    return FolderModule;
}());
exports.FolderModule = FolderModule;
//# sourceMappingURL=folder.module.js.map