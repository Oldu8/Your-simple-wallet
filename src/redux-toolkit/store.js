import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import getCoinsReducer from "./getTopCoinsSlice";
import addCoinReducer from "./addCoinSlice";

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});

const store = configureStore({
  reducer: {
    coins: getCoinsReducer,
    portfolioCoins: addCoinReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
