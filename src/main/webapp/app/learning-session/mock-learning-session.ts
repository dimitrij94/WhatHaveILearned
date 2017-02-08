import {LearningSession, LearningSessionStatus} from "./learning-session";
import {USER} from "../user/mock-user";
import {FOLDER} from "../folders/mock-folder";
/**
 * Created by Dmitrij on 24.01.2017.
 */
export const MOCK_LEARNING_SESSION:LearningSession = new LearningSession(
  Date.now() - 24 * 3600 * 1000,
  LearningSessionStatus.TAKEN,
  75,
  USER,
  FOLDER);
