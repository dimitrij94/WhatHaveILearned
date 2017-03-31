"use strict";
var core_1 = require("@angular/core");
/**
 * Created by Dmitrij on 22.03.2017.
 */
var ShuffleCardsTrigger = (function () {
    function ShuffleCardsTrigger() {
    }
    ShuffleCardsTrigger.getShuffleAnimationTrigger = function (animationName) {
        return core_1.trigger(animationName, [
            core_1.state("previous", core_1.style({ position: "relative", left: '-7%', opacity: 0.5, zIndex: 1, transform: 'scale(0.5)' })),
            core_1.state("next", core_1.style({ position: 'relative', left: '7%', opacity: 0.5, zIndex: 1, transform: 'scale(0.5)' })),
            core_1.state('active', core_1.style({ position: 'relative', left: 0, opacity: 1.0, zIndex: 2 })),
            core_1.transition("active <=> previous, active <=> next", [core_1.animate('350ms')]),
            core_1.transition("previous => void", [
                core_1.animate("350ms", core_1.style({ left: '-7%', opacity: 0, position: 'relative', transform: 'scale(0.2)' }))
            ]),
            core_1.transition("next => void", [
                core_1.animate("350ms", core_1.style({ left: '7%', opacity: 0, position: 'relative', transform: 'scale(0.2)' }))
            ]),
            core_1.transition("void => next", [
                core_1.style({ left: '7%', position: 'relative', opacity: 0.0, transform: 'scale(0.5)' }),
                core_1.animate('350ms')
            ]),
            core_1.transition("void => previous", [
                core_1.style({ left: '-7%', position: 'relative', opacity: 0.0, transform: 'scale(0.5)' }),
                core_1.animate('350ms')
            ])
        ]);
    };
    return ShuffleCardsTrigger;
}());
exports.ShuffleCardsTrigger = ShuffleCardsTrigger;
/*
 private oldAnimation = trigger('shiftCardAnimation', [
 transition('void => previous', [
 style({zIndex: 2, top: -100, opacity: 0.0}),
 animate('250ms ease-in-out', style({zIndex: 2, top: 0, opacity: 1.0}))
 ]),
 transition('previous => void', [
 animate('250ms ease-in-out', style({zIndex: 2, top: 100}))
 ]),
 transition('void => next', [
 animate('250ms ease-in-out', style({top: 100, zIndex: 2, opacity: 0.0}))
 ]),
 transition('next => void', [
 animate('250ms ease-in-out', style({top: -100, opacity: 0.0}))
 ])

 ]
 );
 */
//# sourceMappingURL=shuffle-cards.trigger.js.map