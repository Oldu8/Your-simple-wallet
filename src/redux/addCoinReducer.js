import { ADD_COIN } from "./types";

const initialState = {
  portfolioCoins: [],
};

export const addCoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COIN:
      return {
        ...state,
        portfolioCoins: [...state.portfolioCoins, action.payload],
      };
    default:
      return state;
  }
};
