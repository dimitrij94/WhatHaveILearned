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
 * Created by Dmitrij on 23.01.2017.
 */
var core_1 = require("@angular/core");
var directory_1 = require("./directory");
var user_1 = require("../user/user");
var DirectoryComponent = (function () {
    function DirectoryComponent() {
    }
    DirectoryComponent.prototype.ngOnInit = function () {
        if (this.user)
            this.directory = directory_1.Directory.constructFromUser(this.user);
    };
    __decorate([
        core_1.Input('active-user'), 
        __metadata('design:type', user_1.User)
    ], DirectoryComponent.prototype, "user", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', directory_1.Directory)
    ], DirectoryComponent.prototype, "directory", void 0);
    DirectoryComponent = __decorate([
        core_1.Component({
            selector: 'my-directory',
            moduleId: module.id,
            templateUrl: './directory.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DirectoryComponent);
    return DirectoryComponent;
}());
exports.DirectoryComponent = DirectoryComponent;
//# sourceMappingURL=directory.component.js.map