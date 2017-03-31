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
/**
 * Created by Dmitrij on 15.02.2017.
 */
var MyRoutingService = (function () {
    function MyRoutingService() {
    }
    MyRoutingService.prototype.getFolderRouterLink = function (user_id, interest_id, folder_id) {
        return ['/user', user_id, 'interest', interest_id, 'folder', folder_id];
    };
    MyRoutingService.prototype.getInterestRoutingLink = function (interest_id, user_id) {
        return ['/user', user_id, 'interest', interest_id];
    };
    MyRoutingService.prototype.getUserHomeRoutingLink = function () {
        return ['/user', 'home'];
    };
    MyRoutingService.prototype.getFolderEditRouterLink = function (user_id, interest_id, folder_id) {
        return this.getFolderRouterLink(user_id, interest_id, folder_id).concat('edit');
    };
    MyRoutingService.prototype.getFolderShuffleRouterLink = function (user_id, interest_id, folder_id) {
        return this.getFolderRouterLink(user_id, interest_id, folder_id).concat('shuffle');
    };
    MyRoutingService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MyRoutingService);
    return MyRoutingService;
}());
exports.MyRoutingService = MyRoutingService;
//# sourceMappingURL=my-routing.service.js.map