"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
 * Created by Dmitrij on 07.03.2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var folder_service_1 = require("../folder.service");
var card_1 = require("../../card/card");
var generic_shuffle_animation_component_1 = require("../../animations/shuffle-animation/generic-shuffle-animation.component");
var shuffle_cards_trigger_1 = require("../../animations/shuffle-animation/shuffle-cards.trigger");
var FolderEditComponent = (function (_super) {
    __extends(FolderEditComponent, _super);
    function FolderEditComponent(route, folderService, changeDetectorRef) {
        _super.call(this, changeDetectorRef);
        this.route = route;
        this.folderService = folderService;
        this.changeDetectorRef = changeDetectorRef;
    }
    FolderEditComponent.prototype.getSelectedCardsQueue = function () {
        return this.selectedCardsQueue;
    };
    FolderEditComponent.prototype.getPlaceholderCard = function () {
        return new card_1.Card();
    };
    FolderEditComponent.prototype.getCards = function () {
        return this.folder.cards;
    };
    FolderEditComponent.prototype.setSelectedCardsQueue = function (cardes) {
        this.selectedCardsQueue = cardes;
    };
    FolderEditComponent.prototype.getAnimationState = function (index) {
        if (this.selectedCardsQueue.length == 2) {
            switch (index) {
                case 0:
                    return 'active';
                case 1:
                    return 'next';
            }
        }
        else {
            switch (index) {
                case 0:
                    return "previous";
                case 1:
                    return "active";
                case 2:
                    return "next";
            }
        }
    };
    FolderEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.switchMap(function (params) {
            return _this.folderService.get(+params['folder_id']);
        }).subscribe(function (folder) {
            var numCards = folder.cards.length;
            _this.selectedCardsQueue = folder.cards.slice(numCards >= 3 ? -3 : 0, numCards);
            _this.folder = folder;
        });
    };
    FolderEditComponent = __decorate([
        core_1.Component({
            selector: 'folder-editor',
            moduleId: module.id,
            templateUrl: './folder-edit-component.html',
            animations: [shuffle_cards_trigger_1.ShuffleCardsTrigger.getShuffleAnimationTrigger("shuffleCardsAnimation")]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, folder_service_1.FolderService, core_1.ChangeDetectorRef])
    ], FolderEditComponent);
    return FolderEditComponent;
}(generic_shuffle_animation_component_1.GenericShuffleAnimationComponent));
exports.FolderEditComponent = FolderEditComponent;
//# sourceMappingURL=folder-edit.component.js.map