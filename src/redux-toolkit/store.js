import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import getCoinsReducer from "./getTopCoinsSliceFetch";
import addCoinReducer from "./addCoinSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  coins: getCoinsReducer,
  portfolioCoins: addCoinReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleware = getDefaultMiddleware({
  immutableCheck: false,
  serializableCheck: false,
  thunk: true,
});
const store = configureStore({
  reducer: persistedReducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);

export default store;
