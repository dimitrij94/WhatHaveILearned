/**
 * Created by Dmitrij on 18.02.2017.
 */
import {Injectable} from "@angular/core";
import {UserProgressService} from "../user-progress/user-progress-service";
import {UserInterest} from "../interest/user-interest";
import {LearningSession} from "./learning-session";
import {DatePipe} from "@angular/common";

@Injectable()
export class LearningSessionService {

  constructor(private progressService:UserProgressService) {
  }

  public getLearningSessionDate(session:LearningSession):string {
    let datePipe = new DatePipe("uk-UA");
    return datePipe.transform(session.sessionDate);
  }

  public getLastLearningSession(sessions:Array<LearningSession>):LearningSession {
    if (sessions) {
      return sessions.sort(
        (session1:LearningSession, session2:LearningSession) => {
          return session2.sessionDate.getDate() - session1.sessionDate.getDate();
        })[sessions.length - 1];
    }
    else
      throw new Error("folder is not studied yet");
  }

  public findInterest(interests:Array<UserInterest>, id:number):UserInterest {
    return interests.find((interest:UserInterest)=>interest.id === id);
  }
}
