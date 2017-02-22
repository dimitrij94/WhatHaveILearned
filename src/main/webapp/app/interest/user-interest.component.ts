/**
 * Created by Dmitrij on 22.01.2017.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {UserInterest} from "./user-interest";
import {UserInterestService} from "./user-interest.service";
import {User} from "../user/user";
import {AuthenticationService} from "../authentication/authentication.service";
import {Location} from "@angular/common";
import {MyRoutingService} from "../my-routing.service";
import {LearningSessionService} from "../learning-session/learning-session.service";
import {LearningSession} from "../learning-session/learning-session";
import {FolderService} from "../folders/folder.service";
import {UserProgressService} from "../user-progress/user-progress-service";
import {Folder} from "../folders/folder";


@Component({
  selector: 'userInterest',
  moduleId: module.id,
  templateUrl: 'user-interest.component.html'
})
export class UserInterestComponent implements OnInit {
  private interest:UserInterest;
  //private breadcrumbs:Array<Breadcrumb>;
  private user:User;

  constructor(private interestService:UserInterestService,
              private learningSessionService:LearningSessionService,
              private route:ActivatedRoute,
              private folderService:FolderService,
              private authService:AuthenticationService,
              private location:Location,
              private routingService:MyRoutingService,
              private userProgressService:UserProgressService) {
  }

  getFolderLastLearningSessionDate(sessions:Array<LearningSession>) {
    if (sessions)
      try {
        return this.learningSessionService.getLearningSessionDate(this.learningSessionService.getLastLearningSession(sessions));
      } catch (ex) {
        console.log(ex);
      }
    else return "Not studied yet";
  }

  ngOnInit() {
  let self = this;

    this.route.params
      .subscribe((params:Params) => {
        this.authService.checkPermissions(+params['interest_id'], this.location);
        this.interestService.getUserInterest(+params['user_id'], +params['interest_id'],
          (userInterest:UserInterest) => {
              userInterest.folders = userInterest.folders.map((folder:Folder) => this.userProgressService.getUserProgress(folder, this.user));
              self.interest = userInterest;
            //this.breadcrumbs = this.interestService.getBreadcrumbs(this.route, userInterest);
          }
        )
      });
  }
}
