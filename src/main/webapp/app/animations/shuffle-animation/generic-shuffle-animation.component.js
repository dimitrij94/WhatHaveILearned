"use strict";
/**
 * Created by Dmitrij on 22.03.2017.
 */
var GenericShuffleAnimationComponent = (function () {
    function GenericShuffleAnimationComponent(changeDetector) {
        this.changeDetector = changeDetector;
        this.orientation = "none";
    }
    GenericShuffleAnimationComponent.prototype.nextCard = function () {
        this.orientation = "next";
        this.changeDetector.detectChanges();
        //remove the first elemet of queue
        this.getSelectedCardsQueue().length > 2 && this.getSelectedCardsQueue().shift();
        //last element of selected cards
        var lastSelectedCard = this.getSelectedCardsQueue()[this.getSelectedCardsQueue().length - 1];
        //if the last selected card is the last card in the array push new card into array of folder cards
        if (this.getCards().indexOf(lastSelectedCard) == this.getCards().length - 1) {
            this.getCards().push(this.getPlaceholderCard());
        }
        //push last card from array of folder cards to the selected cards queue
        this.getSelectedCardsQueue().push(this.getCards()[this.getCards().indexOf(lastSelectedCard) + 1]);
    };
    GenericShuffleAnimationComponent.prototype.previousCard = function () {
        this.orientation = "previous";
        //presumably should reavalueate the animations
        this.changeDetector.detectChanges();
        //remove the last element of selected cards queue
        this.getSelectedCardsQueue().pop();
        var firstSelectedCard = this.getSelectedCardsQueue()[0];
        var firstCardIndex = this.getCards().indexOf(firstSelectedCard);
        if (firstCardIndex == 0)
            return;
        var previouseCard = this.getCards()[firstCardIndex - 1];
        //push previouse card at the begining of the array
        this.getSelectedCardsQueue().unshift(previouseCard);
    };
    GenericShuffleAnimationComponent.prototype.goToCard = function (index) {
        var numCards = this.getSelectedCardsQueue().length;
        var activeIndex = Math.ceil(numCards / 2) - 1;
        var indexMargin = Math.floor(numCards / 2);
        this.orientation = this.getCards().indexOf(this.getSelectedCardsQueue()[activeIndex]) - index > 0 ? "previous" : "next";
        this.changeDetector.detectChanges();
        this.setSelectedCardsQueue(this.getCards().slice(index - indexMargin, index + indexMargin));
    };
    return GenericShuffleAnimationComponent;
}());
exports.GenericShuffleAnimationComponent = GenericShuffleAnimationComponent;
//# sourceMappingURL=generic-shuffle-animation.component.js.map