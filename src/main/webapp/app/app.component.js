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
var authentication_service_1 = require("./authentication/authentication.service");
var common_1 = require("@angular/common");
var AppComponent = (function () {
    function AppComponent(location, authService) {
        this.location = location;
        this.authService = authService;
        this.breadcrumbs = [
            {
                name: "HOME",
                href: ["/user/home"]
            }
        ];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.authService.authenticated)
            this.authService.getUser().then(function (user) { return _this.user = user; });
        else
            this.location.go("/login");
    };
    AppComponent.prototype.showAuthError = function (error) {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            moduleId: module.id,
            templateUrl: './app.component.html'
        }), 
        __metadata('design:paramtypes', [common_1.Location, authentication_service_1.AuthenticationService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map