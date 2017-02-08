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
require("rxjs/add/operator/switchMap");
var FolderComponent = (function () {
    function FolderComponent(route, folderService) {
        this.route = route;
        this.folderService = folderService;
    }
    FolderComponent.prototype.ngOnInit = function () {
        this.getFolder();
    };
    FolderComponent.prototype.getBreadcrumbs = function (folder) {
        return [
            {
                name: folder.interest.name.toUpperCase(),
                href: ['/user/', this.route.params['user_id'], '/interest/', this.route.params['interest_id']]
            },
            {
                name: folder.title.toUpperCase(),
                href: ['/user/', this.route.params['user_id'], '/interest/', this.route.params['interest_id'], '/folder/', folder.id]
            }
        ];
    };
    FolderComponent.prototype.getFolder = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.folderService.getFolder(+params['folder_id']); })
            .subscribe(function (folder) {
            _this.folder = folder;
            _this.breadcrumbs = _this.getBreadcrumbs(folder);
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