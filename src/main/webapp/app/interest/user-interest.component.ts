/**
 * Created by Dmitrij on 22.01.2017.
 */
import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Params, Router} from "@angular/router";
import "rxjs/add/operator/switchMap";
import {Folder} from "../folders/folder";
import {UserInterest} from "./user-interest";
import {Breadcrumb} from "../breadcrumb/breadcrumb";
import {UserInterestService} from "./user-interest.service";
import {LearningSession} from "../learning-session/learning-session";
import {UserProgress} from "../user-progress/user-progress";
import {User} from "../user/user";
import {AuthenticationService} from "../authentication/authentication.service";
import {Location} from "@angular/common";
@Component({
  selector: 'userInterest',
  moduleId: module.id,
  templateUrl: 'user-interest.component.html'
})
export class UserInterestComponent implements OnInit {
  private interest:UserInterest;
  private breadcrumbs:Array<Breadcrumb>;
  private user:User;

  constructor(private interestService:UserInterestService,
              private route:ActivatedRoute,
              private router:Router,
              private authService:AuthenticationService,
              private location:Location) {
  }

  public getRouterLink(folder:Folder) {
    return '/user/' + this.route.params['user_id'] + '/interest/' + this.route.params['interest_id'] + '/folder/' + folder.id
  }


  ngOnInit() {
    this.route.params
      .switchMap((params:Params) => this.interestService.getUserInterest(+params['user_id'], +params['interest_id']))
      .subscribe((userInterest:UserInterest)=> {
        this.interest = userInterest;
        this.breadcrumbs = this.getBreadcrumbs(userInterest);
      });

    if (this.authService.authenticated)
      this.user = this.authService.getUser();
    else this.location.go("/login")
  }


  getLastLearningSession(sessions:Array<LearningSession>) {
    sessions
      .sort(
        (session1:LearningSession, session2:LearningSession) => session2.studied - session1.studied)
      .shift();
  }

  getNextLearningSession(folder:Folder) {
    let userProgress = new UserProgress(this.user, folder, folder.learningSessions);
    let cardProgress:{} = userProgress.parseSessions();
    let estimatedProgress = userProgress.estimateProgress(cardProgress);
    if(estimatedProgress['mastered']===folder.cards.length)
      return "Practice is not required";
    
  }

  getBreadcrumbs(interest:UserInterest):Array<Breadcrumb> {
    return [
      {
        name: 'HOME',
        href: ['/user/home']
      },
      {
        name: interest.name,
        href: ['/user/', this.route.params['user_id'], '/interest/', interest.id]
      },
    ]
  }
}
