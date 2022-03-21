import { createSlice } from "@reduxjs/toolkit";

export const addCoinsSlice = createSlice({
  name: "PORTFOLIO_COINS",
  initialState: {
    portfolioCoins: [],
  },
  reducers: {
    // comment: надо порефаторить, сложно понять
    addCoinToPortfolio(state, { payload }) {
      const sameCoin = state.portfolioCoins.find(
        (item) => item.id === action.payload.id
      );
      if (sameCoin) {
        const newPortfolioCoins = state.portfolioCoins.filter(
          (item) => item.id !== action.payload.id
        );
        const newSameCoin = { ...sameCoin };
        newSameCoin.queryQuantity =
          Number(action.payload.queryQuantity) + +sameCoin.queryQuantity;

        const totalSum =
          Number(action.payload.queryQuantity) *
            Number(action.payload.queryPrice) +
          Number(sameCoin.queryQuantity) * Number(sameCoin.queryPrice);

        newSameCoin.queryPrice = totalSum / newSameCoin.queryQuantity;
        state.portfolioCoins = [...newPortfolioCoins, newSameCoin];
      }

      // comment: зачем это нужно возвращать ?
      return {
        ...state,
        portfolioCoins: [...state.portfolioCoins, action.payload],
      };
    },
    removeCoin(state, action) {
      // comment: это можно сделать с помощью .filter

      const newPortfolioCoins = state.portfolioCoins.filter(
        (x) => x !== action.payload.id
      );

      // const idxToRemove = state.portfolioCoins.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // const before = state.portfolioCoins.slice(0, idxToRemove);
      // const after = state.portfolioCoins.slice(idxToRemove + 1);
      // const newPortfolioCoins = [...before, ...after];

      // comment: ???
      {
        state.portfolioCoins = newPortfolioCoins;
      }
    },
  },
});

export const { addCoinToPortfolio, removeCoin } = addCoinsSlice.actions;
export default addCoinsSlice.reducer;
