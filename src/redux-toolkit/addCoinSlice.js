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
        const { id, queryPrice, queryQuantity } = action.payload;
        const newPortfolioCoins = state.portfolioCoins.filter(
          (item) => item.id !== id
        );
        const newSameCoin = { ...sameCoin };
        newSameCoin.queryQuantity = +queryQuantity + +sameCoin.queryQuantity;
        const totalSum =
          +queryQuantity * +queryPrice +
          +sameCoin.queryQuantity * +sameCoin.queryPrice;

        newSameCoin.queryPrice = totalSum / newSameCoin.queryQuantity;
        state.portfolioCoins = [...newPortfolioCoins, newSameCoin];
      } else {
        state.portfolioCoins = [...state.portfolioCoins, action.payload];
      }
    },
    removeCoin(state, action) {
      const newPortfolioCoins = state.portfolioCoins.filter(
        (x) => x.id !== action.payload.id
      );
      state.portfolioCoins = newPortfolioCoins;
    },
  },
});

export const { addCoinToPortfolio, removeCoin } = addCoinsSlice.actions;
export default addCoinsSlice.reducer;
