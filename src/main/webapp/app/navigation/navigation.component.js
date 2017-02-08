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
var user_1 = require("../user/user");
var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    __decorate([
        core_1.Input('active-user'), 
        __metadata('design:type', user_1.User)
    ], NavigationComponent.prototype, "user", void 0);
    NavigationComponent = __decorate([
        core_1.Component({
            selector: 'my-navigation',
            template: "\n<md-toolbar>\n    <span>What have i learned</span>\n</md-toolbar>\n<md-list dense>\n    <my-directory [active-user]=\"user\"></my-directory>\n</md-list>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], NavigationComponent);
    return NavigationComponent;
}());
exports.NavigationComponent = NavigationComponent;
//# sourceMappingURL=navigation.component.js.map