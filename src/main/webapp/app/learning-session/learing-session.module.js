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
 * Created by Dmitrij on 18.02.2017.
 */
var core_1 = require("@angular/core");
var learning_session_service_1 = require("./learning-session.service");
var LearningSessionModule = (function () {
    function LearningSessionModule() {
    }
    LearningSessionModule = __decorate([
        core_1.NgModule({
            imports: [],
            exports: [],
            providers: [learning_session_service_1.LearningSessionService]
        }), 
        __metadata('design:paramtypes', [])
    ], LearningSessionModule);
    return LearningSessionModule;
}());
exports.LearningSessionModule = LearningSessionModule;
//# sourceMappingURL=learing-session.module.js.map