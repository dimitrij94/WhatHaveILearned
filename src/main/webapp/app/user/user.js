"use strict";
/**
 * Created by Dmitrij on 17.01.2017.
 */
var User = (function () {
    function User(id, name, email, interests) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.interests = interests;
    }
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map