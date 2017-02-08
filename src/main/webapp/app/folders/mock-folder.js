"use strict";
var mock_learning_session_1 = require("../learning-session/mock-learning-session");
var mock_user_interest_1 = require("../interest/mock-user-interest");
var mock_cards_1 = require("../card/mock-cards");
/**
 * Created by Dmitrij on 12.01.2017.
 */
exports.FOLDER = {
    id: 1,
    title: "My life values",
    cards: mock_cards_1.MOCK_CARDS,
    learningSessions: [mock_learning_session_1.MOCK_LEARNING_SESSION],
    interest: mock_user_interest_1.MOCK_USER_INTEREST
};
//# sourceMappingURL=mock-folder.js.map