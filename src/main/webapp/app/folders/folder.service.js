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
 * Created by Dmitrij on 12.01.2017.
 */
var core_1 = require("@angular/core");
var mock_folder_1 = require("./mock-folder");
var user_interest_service_1 = require("../interest/user-interest.service");
var FolderService = (function () {
    function FolderService(interestService) {
        this.interestService = interestService;
    }
    FolderService.prototype.getFolder = function (folder_id) {
        return Promise.resolve(mock_folder_1.FOLDER);
    };
    FolderService.prototype.findFolder = function (folders, id) {
        return folders.find(function (folder) { return folder.id === id; });
    };
    FolderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_interest_service_1.UserInterestService])
    ], FolderService);
    return FolderService;
}());
exports.FolderService = FolderService;
//# sourceMappingURL=folder.service.js.map