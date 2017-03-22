/**
 * Created by Dmitrij on 22.01.2017.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
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
  private params:Params;

  constructor(private interestService:UserInterestService,
              private learningSessionService:LearningSessionService,
              /* folder service is used inside the template*/
              private folderService:FolderService,
              private route:ActivatedRoute,
              private authService:AuthenticationService,
              private location:Location,
              private routingService:MyRoutingService,
              private userProgressService:UserProgressService,
              private parentRouter:Router) {
  }

  getFolderLastLearningSessionDate(sessions:Array<LearningSession>):string {
    if (sessions)
      try {
        return this.learningSessionService.getLearningSessionDate(this.learningSessionService.getLastLearningSession(sessions));
      } catch (ex) {
        console.log(ex);
      }
    else return "Folder have not bean studied yet";
  }

  getRouterLink(folder:Folder) {
    this.parentRouter.navigateByUrl(this.routingService.getFolderRouterLink(+this.params['user_id'], +this.params['interest_id'], folder.id).join(''));
  }

  ngOnInit() {
    this.route.params
      .switchMap((params:Params) => {
        this.params = params;
        this.authService.checkPermissions(+params['interest_id'], this.location);
        return this.interestService.getUserInterest(+params['user_id'], +params['interest_id'])
      })
      .subscribe((userInterest:UserInterest) => {
        userInterest.folders.forEach(
          (folder:Folder) => {
            folder.lastLearningSessionDate = this.getFolderLastLearningSessionDate(folder.learningSessions);
            folder.userProgress = this.userProgressService.estimateProgress(folder, this.user)
          });

        this.interestService.cacheValue(userInterest);
        this.interest = userInterest;
        //this.breadcrumbs = this.interestService.getBreadcrumbs(this.route, userInterest);
      });
  }
}
