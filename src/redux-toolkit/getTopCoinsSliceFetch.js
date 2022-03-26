import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=`;
export const fetchTopCoins = createAsyncThunk(
  "DOWNLOAD_COINS",
  async (page) => {
    let response = await fetch(`${api} + ${page}`);
    const data = await response.json();
    return data;
  }
);

export const getTopCoinsSlice = createSlice({
  name: "DOWNLOAD_COINS",
  initialState: {
    coins: [],
  },
  reducers: {},
  extraReducers: {
    [fetchTopCoins.fulfilled]: (state, { payload }) => {
      state.coins = payload;
    },
  },
});

export const { getCoins } = getTopCoinsSlice.actions;
export default getTopCoinsSlice.reducer;
