import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import getCoinsReducer from "./slice";
import { combineReducers } from "redux";
// import { getCoinsReducer } from "../redux/getCoinsReducer"; obi4nie redux
import getCoinsReducer from "./slice";
import { addCoinReducer } from "../redux/addCoinReducer";

export const rootReducer = combineReducers({
  coins: getCoinsReducer,
  portfolioCoins: addCoinReducer,
});

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
  reducer: {
    coins: getCoinsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
