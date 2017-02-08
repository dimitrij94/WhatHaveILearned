"use strict";
var learning_session_1 = require("../learning-session/learning-session");
/**
 * Created by Dmitrij on 29.01.2017.
 */
var UserProgress = (function () {
    function UserProgress(user, folder, learningSessions) {
        this.user = user;
        this.folder = folder;
        this.learningSessions = learningSessions;
        //if any of percentages of progress are not calculated and user has sufficient amount of learning sessions -> recalculate
        //if (!(this.percentMastered || this.percentPracticed) && this.learningSessions.length >= 2)
        //this.parseSessions();
    }
    UserProgress.prototype.parseSessions = function () {
        var cardsProgress = {};
        //initializing map of zeros for each card id
        this.folder.cards.map(function (card) { return cardsProgress[card.id] = 0; });
        var learningSessions = this.learningSessions;
        for (var i = 1; i < learningSessions.length; i++) {
            for (var cardId in learningSessions[i].cardsStatuses) {
                if (learningSessions[i - 1].cardsStatuses.hasOwnProperty(cardId) &&
                    learningSessions[i - 1].cardsStatuses[cardId] == learning_session_1.CardLearningStatus.REMEMBERED) {
                    cardsProgress[cardId]++;
                }
            }
        }
        return cardsProgress;
    };
    UserProgress.prototype.estimateProgress = function (cardsProgress) {
        var num_cards = this.folder.cards.length;
        var num_mastered = 0;
        var num_practiced = 0;
        /*let masteredCardsKeys = Object.keys(cardsProgress).filter((value)=>cardsProgress[value] >= 3);
         this.percentMastered = masteredCardsKeys.length / num_cards;
    
         let practicedCardsKeys = Object.keys(cardsProgress).filter((value)=>cardsProgress[value] >= 1 && cardsProgress[value] < 3);
         this.percentPracticed = practicedCardsKeys.length/num_cards;
         */
        for (var cardId in cardsProgress) {
            if (cardsProgress[cardId] >= 3) {
                num_mastered++;
            }
            else if (cardsProgress[cardId] == 2) {
                num_practiced++;
            }
        }
        this.percentPracticed = num_practiced / num_cards;
        this.percentMastered = num_mastered / num_cards;
        return { "practiced": num_practiced, "mastered": num_mastered };
    };
    return UserProgress;
}());
exports.UserProgress = UserProgress;
//# sourceMappingURL=user-progress.js.map