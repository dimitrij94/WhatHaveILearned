import {Folder} from "./folder";
import {MOCK_LEARNING_SESSION} from "../learning-session/mock-learning-session";
import {MOCK_USER_INTEREST} from "../interest/mock-user-interest";
import {MOCK_CARDS} from "../card/mock-cards";
/**
 * Created by Dmitrij on 12.01.2017.
 */

export const FOLDER:Folder = new Folder(1, "My life values", MOCK_CARDS, MOCK_LEARNING_SESSION, MOCK_USER_INTEREST);

