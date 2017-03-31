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
var user_progress_service_1 = require("../user-progress/user-progress-service");
var common_1 = require("@angular/common");
var LearningSessionService = (function () {
    function LearningSessionService(progressService) {
        this.progressService = progressService;
    }
    LearningSessionService.prototype.getLearningSessionDate = function (session) {
        var datePipe = new common_1.DatePipe("uk-UA");
        return datePipe.transform(session.sessionDate);
    };
    LearningSessionService.prototype.getLastLearningSession = function (sessions) {
        if (sessions) {
            return sessions.sort(function (session1, session2) {
                return session2.sessionDate.getDate() - session1.sessionDate.getDate();
            })[sessions.length - 1];
        }
        else
            throw new Error("folder is not studied yet");
    };
    LearningSessionService.prototype.findInterest = function (interests, id) {
        return interests.find(function (interest) { return interest.id === id; });
    };
    LearningSessionService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [user_progress_service_1.UserProgressService])
    ], LearningSessionService);
    return LearningSessionService;
}());
exports.LearningSessionService = LearningSessionService;
//# sourceMappingURL=learning-session.service.js.map