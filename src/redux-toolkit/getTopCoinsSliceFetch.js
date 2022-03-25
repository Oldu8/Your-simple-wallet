// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// const getTopCoins = createAsyncThunk(
//   "DOWNLOAD_COINS",

//   async () => {
//     let response = await fetch(
//       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1`
//     );
//     const data = await response.json();
//     return data;
//   }
// );

// export const getTopCoinsSlice = createSlice({
//   name: "DOWNLOAD_COINS",
//   initialState: {
//     coins: [],
//   },
//   reducers: {},
//   extraReducers: {
//     [getTopCoins.fulfilled]: (state, { payload }) => {
//       state.coins = payload;
//     },
//   },
// });

// export const { getCoins } = getTopCoinsSlice.actions;
// export default getTopCoinsSlice.reducer;
