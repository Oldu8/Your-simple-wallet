import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTopCoins } from "../components/Functions/getCoin";

export const fetchTopCoins = createAsyncThunk(
  "DOWNLOAD_COINS",
  getTopCoins
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
