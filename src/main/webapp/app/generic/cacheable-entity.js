"use strict";
/**
 * Created by Dmitrij on 19.02.2017.
 */
var cache_time = 60 * 1000;
var CacheableEntity = (function () {
    function CacheableEntity(id) {
    }
    CacheableEntity.prototype.deprecated = function () {
        return (Date.now() - (this.date_added + cache_time)) > 0;
    };
    return CacheableEntity;
}());
exports.CacheableEntity = CacheableEntity;
//# sourceMappingURL=cacheable-entity.js.map