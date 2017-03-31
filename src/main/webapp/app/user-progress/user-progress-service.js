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
 * Created by Dmitrij on 11.02.2017.
 */
var core_1 = require("@angular/core");
var learning_session_1 = require("../learning-session/learning-session");
var user_progress_1 = require("./user-progress");
var UserProgressService = (function () {
    function UserProgressService() {
    }
    UserProgressService.prototype.parseSessions = function (folder) {
        var cardsProgress = {};
        //initializing map of zeros for each card id
        folder.cards.map(function (card) { return cardsProgress[card.id] = 0; });
        var learningSessions = folder.learningSessions;
        for (var i = 1; i < learningSessions.length; i++) {
            for (var cardId in learningSessions[i].cardsStatuses) {
                if (learningSessions[i - 1].cardsStatuses.hasOwnProperty(cardId))
                    if (learningSessions[i - 1].cardsStatuses[cardId] == learning_session_1.CardLearningStatus.REMEMBERED) {
                        cardsProgress[cardId]++;
                    }
                    else
                        cardsProgress[cardId] = 0;
            }
        }
        return cardsProgress;
    };
    UserProgressService.prototype.estimateProgress = function (folder, user) {
        var userProgress = new user_progress_1.UserProgress(user, folder, this.parseSessions(folder));
        userProgress.cardProgress = this.parseSessions(folder);
        var num_cards = userProgress.folder.cards.length;
        var num_mastered = 0;
        var num_practiced = 0;
        for (var cardId in userProgress.cardProgress) {
            if (userProgress.cardProgress[cardId] >= 3) {
                num_mastered++;
            }
            else if (userProgress.cardProgress[cardId] == 2) {
                num_practiced++;
            }
            else if (userProgress.cardProgress[cardId] == 1) {
            }
        }
        userProgress.percentMastered = (num_mastered / num_cards) * 100;
        userProgress.percentPracticed = (num_practiced / num_cards) * 100;
        return userProgress;
    };
    UserProgressService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserProgressService);
    return UserProgressService;
}());
exports.UserProgressService = UserProgressService;
//# sourceMappingURL=user-progress-service.js.map