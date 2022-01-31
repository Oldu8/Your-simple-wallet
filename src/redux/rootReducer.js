import { combineReducers } from "redux";
import { getCoinsReducer } from "./getCoinsReducer";

export const rootReducer = combineReducers({
  coins: getCoinsReducer,
});
