/**
 * Created by Dmitrij on 18.02.2017.
 */
import {Injectable} from "@angular/core";
import {Folder} from "../folders/folder";
import {UserProgressService} from "../user-progress/user-progress-service";
import {User} from "../user/user";
import {UserProgress} from "../user-progress/user-progress";
import {UserInterest} from "../interest/user-interest";
import {LearningSession} from "./learning-session";
import {DatePipe} from "@angular/common";

@Injectable()
export class LearningSessionService {

  constructor(private progressService:UserProgressService) {
  }

  public getUserProgress(folder:Folder, user:User) {
    folder.userProgress = new UserProgress(user, folder, this.progressService.parseSessions(folder));
    folder.userProgress = this.progressService.estimateProgress(folder.userProgress);
    return folder;
  }

  public getLearningSessionDate(session:LearningSession) {
    let datePipe = new DatePipe("uk-UA");
    return datePipe.transform(session.sessionDate);
  }

  public getLastLearningSession(sessions:Array<LearningSession>) {
    if (sessions) {
      return sessions.sort(
        (session1:LearningSession, session2:LearningSession) => {
          return session2.sessionDate.getDate() - session1.sessionDate.getDate();
        }).shift();
    }
    else
      throw new Error("session is not studied yet");
  }

  public findInterest(interests:Array<UserInterest>, id:number):UserInterest {
    return interests.find((interest:UserInterest)=>interest.id === id);
  }
}
