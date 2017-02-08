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
var breadcrumb_component_1 = require("./breadcrumb.component");
var material_1 = require("@angular/material");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
/**
 * Created by Dmitrij on 02.02.2017.
 */
var BreadcrumbModule = (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule = __decorate([
        core_1.NgModule({
            imports: [material_1.MaterialModule, common_1.CommonModule, router_1.RouterModule],
            exports: [breadcrumb_component_1.BreadcrumbComponent],
            declarations: [breadcrumb_component_1.BreadcrumbComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], BreadcrumbModule);
    return BreadcrumbModule;
}());
exports.BreadcrumbModule = BreadcrumbModule;
//# sourceMappingURL=breadcrumb.module.js.map