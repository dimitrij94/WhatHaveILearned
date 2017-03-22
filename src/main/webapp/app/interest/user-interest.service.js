"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
 * Created by Dmitrij on 26.01.2017.
 */
var core_1 = require("@angular/core");
var mock_user_interest_1 = require("./mock-user-interest");
var cachable_generic_service_1 = require("../generic/cachable-generic.service");
var folder_service_1 = require("../folders/folder.service");
var UserInterestService = (function (_super) {
    __extends(UserInterestService, _super);
    function UserInterestService(folderService) {
        _super.call(this);
        this.folderService = folderService;
        this.cache = {};
    }
    UserInterestService.prototype.getCache = function () {
        return this.cache;
    };
    UserInterestService.prototype.getById = function (id) {
        var mock_interest = mock_user_interest_1.MOCK_USER_INTEREST;
        mock_interest.folders = [];
        return new Promise(function (resolve) { return setTimeout(function () { return resolve(mock_interest); }, 1000); });
    };
    UserInterestService.prototype.getAllById = function (ids) {
        return new Promise(function (resolve) { return setTimeout(function () { return resolve([mock_user_interest_1.MOCK_USER_INTEREST]); }, 1000); });
    };
    UserInterestService.prototype.getUserInterestById = function (user_id, id) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(mock_user_interest_1.MOCK_USER_INTEREST);
            }, 1000);
        });
    };
    UserInterestService.prototype.cacheValue = function (interest) {
        this.folderService.cacheAll(interest.folders);
        _super.prototype.cacheValue.call(this, interest);
    };
    UserInterestService.prototype.getUserInterest = function (user_id, id, force_reset) {
        if (force_reset === void 0) { force_reset = false; }
        if (force_reset) {
            this.getUserInterestById(user_id, id);
        }
        else {
            var userInterest = _super.prototype.getFromCache.call(this, id);
            if (userInterest)
                return Promise.resolve(userInterest);
            else
                return this.getUserInterestById(user_id, id);
        }
    };
    UserInterestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [folder_service_1.FolderService])
    ], UserInterestService);
    return UserInterestService;
}(cachable_generic_service_1.CachableGenericService));
exports.UserInterestService = UserInterestService;
//# sourceMappingURL=user-interest.service.js.map