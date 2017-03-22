import {trigger, transition} from "@angular/core";
/**
 * Created by Dmitrij on 22.03.2017.
 */

export const ShuffleCardsTrigger = trigger("shuffleAnimation",[
  transition("active => previous",[])
]);
