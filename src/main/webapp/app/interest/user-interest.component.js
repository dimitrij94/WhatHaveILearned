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
 * Created by Dmitrij on 22.01.2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var user_interest_service_1 = require("./user-interest.service");
var user_progress_1 = require("../user-progress/user-progress");
var authentication_service_1 = require("../authentication/authentication.service");
var common_1 = require("@angular/common");
var UserInterestComponent = (function () {
    function UserInterestComponent(interestService, route, router, authService, location) {
        this.interestService = interestService;
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.location = location;
    }
    UserInterestComponent.prototype.getRouterLink = function (folder) {
        return '/user/' + this.route.params['user_id'] + '/interest/' + this.route.params['interest_id'] + '/folder/' + folder.id;
    };
    UserInterestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.interestService.getUserInterest(+params['user_id'], +params['interest_id']); })
            .subscribe(function (userInterest) {
            _this.interest = userInterest;
            _this.breadcrumbs = _this.getBreadcrumbs(userInterest);
        });
        if (this.authService.authenticated)
            this.user = this.authService.getUser();
        else
            this.location.go("/login");
    };
    UserInterestComponent.prototype.getLastLearningSession = function (sessions) {
        sessions
            .sort(function (session1, session2) { return session2.studied - session1.studied; })
            .shift();
    };
    UserInterestComponent.prototype.getNextLearningSession = function (folder) {
        var _this = this;
        sessions.map(function (session) {
            new user_progress_1.UserProgress(_this.r, session.cardsStatuses);
        });
    };
    UserInterestComponent.prototype.getBreadcrumbs = function (interest) {
        return [
            {
                name: 'HOME',
                href: ['/user/home']
            },
            {
                name: interest.name,
                href: ['/user/', this.route.params['user_id'], '/interest/', interest.id]
            },
        ];
    };
    UserInterestComponent = __decorate([
        core_1.Component({
            selector: 'userInterest',
            moduleId: module.id,
            templateUrl: 'user-interest.component.html'
        }), 
        __metadata('design:paramtypes', [user_interest_service_1.UserInterestService, router_1.ActivatedRoute, router_1.Router, authentication_service_1.AuthenticationService, common_1.Location])
    ], UserInterestComponent);
    return UserInterestComponent;
}());
exports.UserInterestComponent = UserInterestComponent;
//# sourceMappingURL=user-interest.component.js.map