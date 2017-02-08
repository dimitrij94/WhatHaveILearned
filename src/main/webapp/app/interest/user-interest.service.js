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
 * Created by Dmitrij on 26.01.2017.
 */
var core_1 = require("@angular/core");
var mock_user_interest_1 = require("./mock-user-interest");
var UserInterestService = (function () {
    function UserInterestService() {
    }
    UserInterestService.prototype.getUserInterest = function (user_id, interest_id) {
        return Promise.resolve(mock_user_interest_1.MOCK_USER_INTEREST);
    };
    UserInterestService.prototype.findInterest = function (interests, id) {
        return interests.find(function (interest) { return interest.id === id; });
    };
    UserInterestService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserInterestService);
    return UserInterestService;
}());
exports.UserInterestService = UserInterestService;
//# sourceMappingURL=user-interest.service.js.map