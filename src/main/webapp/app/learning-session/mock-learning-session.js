"use strict";
var learning_session_1 = require("./learning-session");
var mock_user_1 = require("../user/mock-user");
var mock_folder_1 = require("../folders/mock-folder");
/**
 * Created by Dmitrij on 24.01.2017.
 */
var session_date = 1488904124066;
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
    sessionDate: new Date(session_date - 24 * 3600 * 1000),
    status: learning_session_1.LearningSessionStatus.TAKEN,
    user: mock_user_1.USER,
    folder: mock_folder_1.FOLDER,
    cardsStatuses: { 1: 1, 2: 1, 3: 0 },
    remembered: ParseService.parse(this.cardStatuses),
};
var session2 = {
    sessionDate: new Date(session_date - 2 * 24 * 3600 * 1000),
    status: learning_session_1.LearningSessionStatus.TAKEN,
    cardsStatuses: { 1: 1, 2: 1, 3: 0 },
    user: mock_user_1.USER,
    folder: mock_folder_1.FOLDER,
    remembered: ParseService.parse(this.cardStatuses)
};
var session3 = {
    sessionDate: new Date(session_date - 4 * 24 * 3600 * 1000),
    status: learning_session_1.LearningSessionStatus.TAKEN,
    cardsStatuses: { 1: 1, 2: 1, 3: 0 },
    user: mock_user_1.USER,
    folder: mock_folder_1.FOLDER,
    remembered: ParseService.parse(this.cardStatuses)
};
exports.MOCK_LEARNING_SESSION = [session1, session2, session3];
//# sourceMappingURL=mock-learning-session.js.map