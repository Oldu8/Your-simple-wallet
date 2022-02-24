import { combineReducers } from "redux";
import { getCoinsReducer } from "./getCoinsReducer";
import { addCoinReducer } from "./addCoinReducer";

export const rootReducer = combineReducers({
  coins: getCoinsReducer,
  portfolioCoins: addCoinReducer,
});
