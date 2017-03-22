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
var authentication_service_1 = require("../authentication/authentication.service");
var common_1 = require("@angular/common");
var my_routing_service_1 = require("../my-routing.service");
var learning_session_service_1 = require("../learning-session/learning-session.service");
var folder_service_1 = require("../folders/folder.service");
var user_progress_service_1 = require("../user-progress/user-progress-service");
var UserInterestComponent = (function () {
    function UserInterestComponent(interestService, learningSessionService, 
        /* folder service is used inside the template*/
        folderService, route, authService, location, routingService, userProgressService, parentRouter) {
        this.interestService = interestService;
        this.learningSessionService = learningSessionService;
        this.folderService = folderService;
        this.route = route;
        this.authService = authService;
        this.location = location;
        this.routingService = routingService;
        this.userProgressService = userProgressService;
        this.parentRouter = parentRouter;
    }
    UserInterestComponent.prototype.getFolderLastLearningSessionDate = function (sessions) {
        if (sessions)
            try {
                return this.learningSessionService.getLearningSessionDate(this.learningSessionService.getLastLearningSession(sessions));
            }
            catch (ex) {
                console.log(ex);
            }
        else
            return "Folder have not bean studied yet";
    };
    UserInterestComponent.prototype.getRouterLink = function (folder) {
        this.parentRouter.navigateByUrl(this.routingService.getFolderRouterLink(+this.params['user_id'], +this.params['interest_id'], folder.id).join(''));
    };
    UserInterestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) {
            _this.params = params;
            _this.authService.checkPermissions(+params['interest_id'], _this.location);
            return _this.interestService.getUserInterest(+params['user_id'], +params['interest_id']);
        })
            .subscribe(function (userInterest) {
            userInterest.folders.forEach(function (folder) {
                folder.lastLearningSessionDate = _this.getFolderLastLearningSessionDate(folder.learningSessions);
                folder.userProgress = _this.userProgressService.estimateProgress(folder, _this.user);
            });
            _this.interestService.cacheValue(userInterest);
            _this.interest = userInterest;
            //this.breadcrumbs = this.interestService.getBreadcrumbs(this.route, userInterest);
        });
    };
    UserInterestComponent = __decorate([
        core_1.Component({
            selector: 'userInterest',
            moduleId: module.id,
            templateUrl: 'user-interest.component.html'
        }), 
        __metadata('design:paramtypes', [user_interest_service_1.UserInterestService, learning_session_service_1.LearningSessionService, folder_service_1.FolderService, router_1.ActivatedRoute, authentication_service_1.AuthenticationService, common_1.Location, my_routing_service_1.MyRoutingService, user_progress_service_1.UserProgressService, router_1.Router])
    ], UserInterestComponent);
    return UserInterestComponent;
}());
exports.UserInterestComponent = UserInterestComponent;
//# sourceMappingURL=user-interest.component.js.map