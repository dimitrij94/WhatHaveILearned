"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var my_routing_service_1 = require("../my-routing.service");
/**
 * Created by Dmitrij on 15.02.2017.
 */
var BreadcrumbService = (function () {
    function BreadcrumbService(routingService) {
        this.routingService = routingService;
    }
    BreadcrumbService.prototype.getInterestBreadcrumbs = function (interest, user_id) {
        return [
            {
                name: 'HOME',
                href: this.routingService.getUserHomeRoutingLink()
            },
            {
                name: interest.name,
                href: this.routingService.getInterestRoutingLink(interest.id, user_id)
            },
        ];
    };
    BreadcrumbService.prototype.getFolderBreadcrumbs = function (folder, interest, folder_id, user_id) {
        return this.getInterestBreadcrumbs(interest, user_id).concat([{
                name: folder.title.toUpperCase(),
                href: this.routingService.getFolderRouterLink(user_id, interest.id, folder_id)
            }]);
    };
    BreadcrumbService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [my_routing_service_1.MyRoutingService])
    ], BreadcrumbService);
    return BreadcrumbService;
}());
exports.BreadcrumbService = BreadcrumbService;
//# sourceMappingURL=breadcrumb.service.js.map