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
var cachable_generic_service_1 = require("../generic/cachable-generic.service");
var FolderService = (function (_super) {
    __extends(FolderService, _super);
    function FolderService() {
        _super.call(this);
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
    FolderService.prototype.cacheValue = function (value) {
        //cache folder cards
        _super.prototype.cacheValue.call(this, value);
    };
    FolderService.prototype.getCache = function () {
        return this.cache;
    };
    FolderService.prototype.getAll = function (ids, force_reset, include_cards) {
        if (force_reset === void 0) { force_reset = false; }
        if (include_cards === void 0) { include_cards = false; }
        if (force_reset)
            return { found_in_cache: [], fetched: this.getAllById(ids, include_cards) };
        else {
            var cache_results = _super.prototype.getAllFromCache.call(this, ids);
            return {
                found_in_cache: cache_results.values_found,
                fetched: this.getAllById(cache_results.ids_left, include_cards)
            };
        }
    };
    FolderService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], FolderService);
    return FolderService;
}(cachable_generic_service_1.CachableGenericService));
exports.FolderService = FolderService;
//# sourceMappingURL=folder.service.js.map