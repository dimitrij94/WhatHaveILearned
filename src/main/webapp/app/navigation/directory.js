"use strict";
var Directory = (function () {
    function Directory() {
        this.open = true;
    }
    Directory.constructFromUser = function (user) {
        var newDir = new Directory();
        newDir.title = user.name;
        newDir.icon = 'person';
        newDir.href = ['/user', "home"];
        newDir.childDirectories = user.interests.map(function (interest) { return Directory.constructFromInterest(user, interest); });
        newDir.treeDepth = 0;
        return newDir;
    };
    Directory.constructFromInterest = function (user, interest) {
        var newDir = new Directory();
        newDir.title = interest.name;
        newDir.icon = "folder_shared";
        newDir.href = ['/user', user.id, 'interest', interest.id];
        newDir.treeDepth = 1;
        if (interest.folders)
            newDir.childDirectories = interest.folders.map(function (folder) { return Directory.constructFromFolder(user, interest, folder); });
        return newDir;
    };
    Directory.constructFromFolder = function (user, interest, folder) {
        var newDir = new Directory();
        newDir.title = folder.title;
        newDir.treeDepth = 2;
        newDir.href = ['/user', user.id, 'interest', interest.id, 'folder', folder.id];
        newDir.icon = "folder";
        return newDir;
    };
    return Directory;
}());
exports.Directory = Directory;
//# sourceMappingURL=directory.js.map