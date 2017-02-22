"use strict";
var folder_1 = require("./folder");
var mock_learning_session_1 = require("../learning-session/mock-learning-session");
var mock_user_interest_1 = require("../interest/mock-user-interest");
var mock_cards_1 = require("../card/mock-cards");
/**
 * Created by Dmitrij on 12.01.2017.
 */
exports.FOLDER = new folder_1.Folder(1, "My life values", mock_cards_1.MOCK_CARDS, mock_learning_session_1.MOCK_LEARNING_SESSION, mock_user_interest_1.MOCK_USER_INTEREST);
//# sourceMappingURL=mock-folder.js.map