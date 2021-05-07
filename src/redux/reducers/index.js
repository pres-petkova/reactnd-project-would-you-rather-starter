import { combineReducers } from "redux";
import questions from "./questions";
import account from "./account";
import users from "./users";

export default combineReducers({
  questions,
  account,
  users,
});
