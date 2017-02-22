"use strict";
/**
 * Created by Dmitrij on 19.02.2017.
 */
var cacheUpdateTime = 60 * 60 * 1000;
var CachableGenericService = (function () {
    function CachableGenericService() {
        var _this = this;
        this.cache = {};
        setTimeout(function () {
            _this.cleanCache();
        }, cacheUpdateTime);
    }
    CachableGenericService.prototype.cleanCache = function () {
        for (var id in this.cache) {
            this.cache[id].deprecated() && delete this.cache[id];
        }
    };
    CachableGenericService.prototype.cacheValue = function (value) {
        value.date_added = Date.now();
        this.getCache()[value.id] = value;
    };
    CachableGenericService.prototype.getFromCache = function (id) {
        var cachedValue = this.getCache()[id];
        if (cachedValue)
            cachedValue.date_added = Date.now();
        return cachedValue;
    };
    CachableGenericService.prototype.getAndCache = function (id, callback) {
        var _this = this;
        this.getById(id).then(function (result) {
            _this.cacheValue(result);
            callback(result);
        });
    };
    CachableGenericService.prototype.getAll = function (ids, callback, force_reset) {
        var _this = this;
        if (force_reset === void 0) { force_reset = false; }
        if (force_reset)
            this.getAllById(ids).then(function (value) {
                value.forEach(function (v) { return _this.cacheValue(v); });
                callback(value);
            });
        else {
            var ids_left_1 = [];
            var values_cached_1 = [];
            ids.forEach(function (id) {
                var v = _this.getFromCache(id);
                if (v)
                    values_cached_1.push(v);
                else
                    ids_left_1.push(id);
            });
            this.getAllById(ids_left_1).then(function (result) { return callback(result.concat(values_cached_1)); });
        }
    };
    CachableGenericService.prototype.get = function (id, callback, force_reset) {
        if (force_reset === void 0) { force_reset = false; }
        if (force_reset) {
            this.getAndCache(id, callback);
        }
        else {
            var cached_value = this.getFromCache(id);
            if (cached_value) {
                callback(cached_value);
            }
            else {
                this.getAndCache(id, callback);
            }
        }
    };
    return CachableGenericService;
}());
exports.CachableGenericService = CachableGenericService;
//# sourceMappingURL=cachable-generic.service.js.map