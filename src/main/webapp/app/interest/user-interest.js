"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var cacheable_entity_1 = require("../cacheable-entity");
/**
 * Created by Dmitrij on 23.01.2017.
 */
var UserInterest = (function (_super) {
    __extends(UserInterest, _super);
    function UserInterest(id, folders, name) {
        _super.call(this, id);
        this.id = id;
        this.folders = folders;
        this.name = name;
    }
    return UserInterest;
}(cacheable_entity_1.CacheableEntity));
exports.UserInterest = UserInterest;
//# sourceMappingURL=user-interest.js.map