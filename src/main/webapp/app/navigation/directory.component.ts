/**
 * Created by Dmitrij on 23.01.2017.
 */
import {Component, Input, OnInit, trigger, state, style, transition, animate} from "@angular/core";
import {Directory} from "./directory";
import {User} from "../user/user";
@Component({
  selector: 'my-directory',
  moduleId: module.id,
  templateUrl: './directory.component.html',
  animations: [
    trigger('pointerState', [
      state('opened', style({transform: 'rotateZ(90deg)'})),
      state('closed', style({transform: 'rotateZ(0deg)'})),
      transition('opened <=> closed', animate(250))
    ]),
    trigger('directoryState', [
      state('opened', style({
        transform: "translateY(0)",
        zIndex: 2,
        opacity: 1
      })),
      transition('* => void', [
        style({
          zIndex: 1
        }),
        animate(250, style({
          transform: 'translateY(-100%)',
          opacity: 0
        }))
      ]),
      transition('void => *', [
        style({
          zIndex: 1,
          transform: 'translateY(-100%)'
        }),
        animate(250)
      ])
    ])
  ]
})
export class DirectoryComponent implements OnInit {

  @Input('active-user')
  private user:User;
  @Input()
  private directory:Directory;


  ngOnInit():void {
    if (this.user) this.directory = Directory.constructFromUser(this.user);
  }

}
