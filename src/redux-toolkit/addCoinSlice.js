import { createSlice } from "@reduxjs/toolkit";

export const addCoinsSlice = createSlice({
  name: "PORTFOLIO_COINS",
  initialState: {
    portfolioCoins: [],
  },
  reducers: {
    addCoinToPortfolio(state, action) {
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
        state.portfolioCoins = [...newPortfolioCoins, newSameCoin];
      }
      return {
        ...state,
        portfolioCoins: [...state.portfolioCoins, action.payload],
      };
    },
    removeCoin(state, action) {
      const idxToRemove = state.portfolioCoins.findIndex(
        (item) => item.id === action.payload.id
      );
      const before = state.portfolioCoins.slice(0, idxToRemove);
      const after = state.portfolioCoins.slice(idxToRemove + 1);
      const newPortfolioCoins = [...before, ...after];

      {
        state.portfolioCoins = newPortfolioCoins;
      }
    },
  },
});

export const { addCoinToPortfolio, removeCoin } = addCoinsSlice.actions;
export default addCoinsSlice.reducer;
