"use strict";
var learning_session_1 = require("./learning-session");
var mock_user_1 = require("../user/mock-user");
var mock_folder_1 = require("../folders/mock-folder");
var mock_cards_1 = require("../card/mock-cards");
/**
 * Created by Dmitrij on 24.01.2017.
 */
var ParseService = (function () {
    function ParseService() {
    }
    ParseService.parseFolderCards = function (cards) {
        var cardStatuses = {};
        for (var i = 0; i < cards.length; i++) {
            cardStatuses[cards[i].id] = 1;
        }
        return cardStatuses;
    };
    ParseService.parse = function (cardsStatuses) {
        var remembered = 0;
        var num_cards = 0;
        for (var status_1 in cardsStatuses) {
            if (cardsStatuses[status_1] == 1)
                remembered++;
            num_cards++;
        }
        return remembered / num_cards;
    };
    return ParseService;
}());
var session1 = {
    sessionDate: new Date(Date.now() - 24 * 3600 * 1000),
    status: learning_session_1.LearningSessionStatus.TAKEN,
    user: mock_user_1.USER,
    folder: mock_folder_1.FOLDER,
    cardsStatuses: ParseService.parseFolderCards(mock_cards_1.MOCK_CARDS),
    remembered: ParseService.parse(this.cardStatuses),
};
var session2 = {
    sessionDate: new Date(Date.now() - 2 * 24 * 3600 * 1000),
    status: learning_session_1.LearningSessionStatus.TAKEN,
    cardsStatuses: ParseService.parseFolderCards(mock_cards_1.MOCK_CARDS),
    user: mock_user_1.USER,
    folder: mock_folder_1.FOLDER,
    remembered: ParseService.parse(this.cardStatuses)
};
var session3 = {
    sessionDate: new Date(Date.now() - 4 * 24 * 3600 * 1000),
    status: learning_session_1.LearningSessionStatus.TAKEN,
    cardsStatuses: { 1: 1, 2: 1, 3: 0 },
    user: mock_user_1.USER,
    folder: mock_folder_1.FOLDER,
    remembered: ParseService.parse(this.cardStatuses)
};
exports.MOCK_LEARNING_SESSION = [session1, session2];
//# sourceMappingURL=mock-learning-session.js.map