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
var common_1 = require("@angular/common");
var authentication_service_1 = require("../authentication/authentication.service");
var UserHomeComponent = (function () {
    function UserHomeComponent(authService, location) {
        this.authService = authService;
        this.location = location;
        this.breadcrumbs = [{ name: "HOME", href: ['/user', '/home'] }];
    }
    UserHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.authenticated)
            this.authService.getUser().then(function (user) { return _this.user = user; });
        else
            this.location.go('/login');
    };
    UserHomeComponent = __decorate([
        core_1.Component({
            selector: 'user-home',
            moduleId: module.id,
            templateUrl: './user-home.component.html'
        }), 
        __metadata('design:paramtypes', [authentication_service_1.AuthenticationService, common_1.Location])
    ], UserHomeComponent);
    return UserHomeComponent;
}());
exports.UserHomeComponent = UserHomeComponent;
//# sourceMappingURL=user-home.component.js.map