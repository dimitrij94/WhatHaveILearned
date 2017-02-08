"use strict";
var learning_session_1 = require("./learning-session");
var mock_user_1 = require("../user/mock-user");
var mock_folder_1 = require("../folders/mock-folder");
/**
 * Created by Dmitrij on 24.01.2017.
 */
exports.MOCK_LEARNING_SESSION = new learning_session_1.LearningSession(Date.now() - 24 * 3600 * 1000, learning_session_1.LearningSessionStatus.TAKEN, 75, mock_user_1.USER, mock_folder_1.FOLDER);
//# sourceMappingURL=mock-learning-session.js.map