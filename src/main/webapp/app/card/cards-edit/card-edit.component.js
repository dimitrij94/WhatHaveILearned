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
/**
 * Created by Dmitrij on 20.03.2017.
 */
var core_1 = require("@angular/core");
var card_1 = require("../card");
require("rxjs/add/operator/switchMap");
require("rxjs/add/operator/debounceTime");
var Rx_1 = require("rxjs/Rx");
var CardEditComponent = (function () {
    function CardEditComponent() {
        var _this = this;
        this.debounceSubject = new Rx_1.Subject();
        this.debounceSubject
            .debounceTime(500 /*ms*/)
            .subscribe(function (card) {
            _this.editedCard = card;
        });
    }
    CardEditComponent.prototype.updateCard = function (card) {
        this.debounceSubject.next(card);
    };
    __decorate([
        core_1.Input('editedCard'), 
        __metadata('design:type', card_1.Card)
    ], CardEditComponent.prototype, "editedCard", void 0);
    CardEditComponent = __decorate([
        core_1.Component({
            selector: 'card-edit',
            moduleId: module.id,
            templateUrl: './card-edit.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], CardEditComponent);
    return CardEditComponent;
}());
exports.CardEditComponent = CardEditComponent;
//# sourceMappingURL=card-edit.component.js.map