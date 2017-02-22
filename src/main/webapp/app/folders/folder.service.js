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
 * Created by Dmitrij on 12.01.2017.
 */
var core_1 = require("@angular/core");
var mock_folder_1 = require("./mock-folder");
var user_interest_service_1 = require("../interest/user-interest.service");
var cachable_generic_service_1 = require("../cachable-generic.service");
var FolderService = (function (_super) {
    __extends(FolderService, _super);
    function FolderService(interestService) {
        _super.call(this);
        this.interestService = interestService;
        this.cache = {};
    }
    FolderService.prototype.getFolderNextLearningSessionDate = function (folder) {
        return "10Hr";
    };
    FolderService.prototype.getAllById = function (ids, include_cards) {
        if (include_cards === void 0) { include_cards = false; }
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve([mock_folder_1.FOLDER]); }, 1000);
        });
    };
    FolderService.prototype.getById = function (id, include_cards) {
        if (include_cards === void 0) { include_cards = false; }
        return new Promise(function (resolve) {
            setTimeout(function () { return resolve(mock_folder_1.FOLDER); }, 1000);
        });
    };
    FolderService.prototype.getCache = function () {
        return this.cache;
    };
    FolderService.prototype.get = function (id, callback, force_reset) {
        if (force_reset === void 0) { force_reset = false; }
        _super.prototype.get.call(this, id, callback, force_reset);
    };
    FolderService.prototype.getAll = function (ids, callback, force_reset, include_cards) {
        var _this = this;
        if (force_reset === void 0) { force_reset = false; }
        if (include_cards === void 0) { include_cards = false; }
        if (force_reset) {
            this.getAllById(ids, include_cards).then(function (value) {
                value.forEach(function (f) { return _super.prototype.cacheValue.call(_this, f); });
                callback(value);
            });
        }
        else {
            var ids_left_1 = [];
            var folders_cached_1 = [];
            ids.forEach(function (id) {
                var v = _super.prototype.getFromCache.call(_this, id);
                if (v)
                    folders_cached_1.push(v);
                else
                    ids_left_1.push(id);
            });
            this.getAllById(ids_left_1, include_cards).then(function (retrieved_folders) {
                retrieved_folders.forEach(function (retrieved_folder) { return _super.prototype.cacheValue.call(_this, retrieved_folder); });
                callback(retrieved_folders.concat(folders_cached_1));
            });
        }
    };
    FolderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_interest_service_1.UserInterestService])
    ], FolderService);
    return FolderService;
}(cachable_generic_service_1.CachableGenericService));
exports.FolderService = FolderService;
//# sourceMappingURL=folder.service.js.map