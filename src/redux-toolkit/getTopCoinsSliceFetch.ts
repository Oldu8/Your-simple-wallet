import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { getTopCoins } from "../components/Functions/getCoin";
import { IStateCoinsSlice } from "../interface/entities";

export const fetchTopCoins = createAsyncThunk("DOWNLOAD_COINS", getTopCoins);

export const getTopCoinsSlice = createSlice({
  name: "DOWNLOAD_COINS",
  initialState: {
    coins: [],
  },
  reducers: {},
  extraReducers: {
    [`fetchTopCoins.fulfilled`]: (
      state: IStateCoinsSlice,
      action: PayloadAction<IStateCoinsSlice["coins"]>
    ) => {
      state.coins = action.payload;
    },
  },
});
//@ts-ignore

export const { getCoins } = getTopCoinsSlice.actions;
export default getTopCoinsSlice.reducer;
