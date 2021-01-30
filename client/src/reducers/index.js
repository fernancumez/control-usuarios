import { userReducers } from "./userReducers";
import { combineReducers } from "redux";

export const rootReducers = combineReducers({
  users: userReducers,
});
