"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cacheable_entity_1 = require("../cacheable-entity");
/**
 * Created by Dmitrij on 12.01.2017.
 */
var Folder = (function (_super) {
    __extends(Folder, _super);
    function Folder(id, title, cards, learningSessions, interest) {
        _super.call(this, id);
        this.id = id;
        this.title = title;
        this.cards = cards;
        this.learningSessions = learningSessions;
        this.interest = interest;
    }
    return Folder;
}(cacheable_entity_1.CacheableEntity));
exports.Folder = Folder;
//# sourceMappingURL=folder.js.map