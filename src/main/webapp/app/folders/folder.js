"use strict";
/**
 * Created by Dmitrij on 12.01.2017.
 */
var Folder = (function () {
    function Folder(id, title, cards, learningSessions, interest) {
        this.id = id;
        this.title = title;
        this.cards = cards;
        this.learningSessions = learningSessions;
        this.interest = interest;
    }
    return Folder;
}());
exports.Folder = Folder;
//# sourceMappingURL=folder.js.map