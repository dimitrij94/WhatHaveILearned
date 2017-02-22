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
var folder_service_1 = require("./folder.service");
var router_1 = require("@angular/router");
var FolderComponent = (function () {
    //private interest:UserInterest;
    //private breadcrumbs:Array<Breadcrumb>;
    function FolderComponent(route, folderService) {
        this.route = route;
        this.folderService = folderService;
    }
    FolderComponent.prototype.ngOnInit = function () {
        this.getFolder();
    };
    FolderComponent.prototype.getFolder = function () {
        var _this = this;
        var self = this;
        this.route.params.subscribe(function (params) {
            _this.folderService.get(+params['folder_id'], function (folder) {
                self.folder = folder;
            });
        });
    };
    FolderComponent = __decorate([
        core_1.Component({
            selector: 'folder',
            moduleId: module.id,
            templateUrl: "./folder.component.html"
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, folder_service_1.FolderService])
    ], FolderComponent);
    return FolderComponent;
}());
exports.FolderComponent = FolderComponent;
//# sourceMappingURL=folder.component.js.map