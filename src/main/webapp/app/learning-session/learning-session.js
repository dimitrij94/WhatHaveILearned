"use strict";
(function (LearningSessionStatus) {
    LearningSessionStatus[LearningSessionStatus["TAKEN"] = 0] = "TAKEN";
    LearningSessionStatus[LearningSessionStatus["FINISHED"] = 1] = "FINISHED";
    LearningSessionStatus[LearningSessionStatus["FAILED"] = 2] = "FAILED";
    LearningSessionStatus[LearningSessionStatus["NOT_TAKEN"] = 3] = "NOT_TAKEN";
})(exports.LearningSessionStatus || (exports.LearningSessionStatus = {}));
var LearningSessionStatus = exports.LearningSessionStatus;
(function (CardLearningStatus) {
    CardLearningStatus[CardLearningStatus["REMEMBERED"] = 0] = "REMEMBERED";
    CardLearningStatus[CardLearningStatus["FORGOTTEN"] = 1] = "FORGOTTEN";
})(exports.CardLearningStatus || (exports.CardLearningStatus = {}));
var CardLearningStatus = exports.CardLearningStatus;
var daysPlusToEachSession = [1, 7, 30, 90];
/**
 * Created by Dmitrij on 23.01.2017.
 */
var LearningSession = (function () {
    function LearningSession(studied, status, remembered, user, folder) {
        this.studied = studied;
        this.status = status;
        this.remembered = remembered;
        this.user = user;
        this.folder = folder;
        this.sessionDate = new Date(studied);
    }
    return LearningSession;
}());
exports.LearningSession = LearningSession;
//# sourceMappingURL=learning-session.js.map