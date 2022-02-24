import { DOWNLOAD_COINS, REMOVE_COINS } from "./types";

const initialState = {
  coins: [],
  isFetching: true,
};

export const getCoinsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOWNLOAD_COINS:
      return { ...state, coins: action.payload };
    case REMOVE_COINS:
      return { ...state, coins: [] };
    default:
      return state;
  }
};
