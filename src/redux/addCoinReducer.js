import { ADD_COIN } from "./types";

const initialState = {
  portfolioCoins: [],
};

export const addCoinReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COIN:
      const sameCoin = state.portfolioCoins.find(
        (item) => item.id === action.payload.id
      );

      if (sameCoin) {
        const newPortfolioCoins = state.portfolioCoins.filter(
          (item) => item.id !== action.payload.id
        );
        const newSameCoin = { ...sameCoin };
        newSameCoin.queryQuantity =
          Number(action.payload.queryQuantity) + Number(sameCoin.queryQuantity);

        const totalSum =
          Number(action.payload.queryQuantity) *
            Number(action.payload.queryPrice) +
          Number(sameCoin.queryQuantity) * Number(sameCoin.queryPrice);

        newSameCoin.queryPrice = totalSum / newSameCoin.queryQuantity;
        return {
          ...state,
          portfolioCoins: [...newPortfolioCoins, newSameCoin],
        };
      }
      return {
        ...state,
        portfolioCoins: [...state.portfolioCoins, action.payload],
      };
    default:
      return state;
  }
};
