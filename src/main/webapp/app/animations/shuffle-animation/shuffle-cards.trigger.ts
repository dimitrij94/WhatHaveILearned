import {trigger, transition, state, style, animate} from "@angular/core";
/**
 * Created by Dmitrij on 22.03.2017.
 */

export class ShuffleCardsTrigger {
  public static getShuffleAnimationTrigger(animationName:string) {
    return trigger(animationName, [

        state("previous", style({position: "relative", left: '-7%', opacity: 0.5, zIndex: 1, transform: 'scale(0.5)'})),
        state("next", style({position: 'relative', left: '7%', opacity: 0.5, zIndex: 1, transform: 'scale(0.5)'})),
        state('active', style({position: 'relative', left: 0, opacity: 1.0, zIndex: 2})),

        transition("active <=> previous, active <=> next", [animate('350ms')]),

        transition("previous => void", [
          animate("350ms", style({left: '-7%', opacity: 0, position: 'relative', transform: 'scale(0.2)'}))
        ]),
        transition("next => void", [
          animate("350ms", style({left: '7%', opacity: 0, position: 'relative', transform: 'scale(0.2)'}))
        ]),

        transition("void => next", [
          style({left: '7%', position: 'relative', opacity: 0.0, transform: 'scale(0.5)'}),
          animate('350ms')
        ]),
        transition("void => previous", [
          style({left: '-7%', position: 'relative', opacity: 0.0, transform: 'scale(0.5)'}),
          animate('350ms')
        ])
      ]
    );
  }
}

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
