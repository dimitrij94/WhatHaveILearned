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
var mock_user_1 = require("../user/mock-user");
var AuthenticationService = (function () {
    function AuthenticationService() {
        this.authenticated = true;
    }
    AuthenticationService.prototype.getUser = function () {
        return Promise.resolve(mock_user_1.USER);
    };
    AuthenticationService.prototype.authenticate = function (email, password) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.authenticated = true;
                resolve(mock_user_1.USER);
            }, 500);
        });
    };
    AuthenticationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map