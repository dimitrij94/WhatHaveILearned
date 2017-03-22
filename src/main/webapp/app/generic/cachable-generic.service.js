"use strict";
/**
 * Created by Dmitrij on 19.02.2017.
 */
var cacheUpdateTime = 60 * 60 * 1000;
var CachableGenericService = (function () {
    function CachableGenericService() {
        var _this = this;
        setTimeout(function () {
            _this.cleanCache();
        }, cacheUpdateTime);
    }
    CachableGenericService.prototype.cleanCache = function () {
        for (var id in this.getCache()) {
            this.getCache()[id].deprecated() && delete this.getCache()[id];
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
    CachableGenericService.prototype.cacheAll = function (values) {
        var _this = this;
        values.forEach(function (v) {
            _this.cacheValue(v);
        });
    };
    CachableGenericService.prototype.getAllFromCache = function (ids) {
        var _this = this;
        var ids_left = [];
        var values_found = [];
        ids.forEach(function (id) {
            var value = _this.getFromCache(id);
            if (value)
                values_found.push(value);
            else
                ids_left.push(id);
        });
        return { ids_left: ids_left, values_found: values_found };
    };
    CachableGenericService.prototype.getAll = function (ids, force_reset) {
        if (force_reset === void 0) { force_reset = false; }
        var found_in_cache = [];
        if (force_reset)
            return { fetched: this.getAllById(ids), found_in_cache: found_in_cache };
        else {
            var cached_search_result = this.getAllFromCache(ids);
            return {
                found_in_cache: cached_search_result.values_found,
                fetched: this.getAllById(cached_search_result.ids_left)
            };
        }
    };
    CachableGenericService.prototype.get = function (id, force_reset) {
        if (force_reset === void 0) { force_reset = false; }
        if (force_reset) {
            return this.getById(id);
        }
        else {
            var cached_value = this.getFromCache(id);
            if (cached_value) {
                return Promise.resolve(cached_value);
            }
            else {
                return this.getById(id);
            }
        }
    };
    return CachableGenericService;
}());
exports.CachableGenericService = CachableGenericService;
//# sourceMappingURL=cachable-generic.service.js.map