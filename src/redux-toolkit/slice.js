// import { createSlice } from "@reduxjs/toolkit";

// async function getListOfCoins() {
//   let response = await fetch(
//     "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
//   );
//   const data = await response.json();
//   console.log(data);
//   return data;
// }

// const getTopCoinsSlice = createSlice({
//   name: "topCoins",
//   initialState: {
//     topCoins: [],
//   },
//   reducers: {
//     getCoins(state, action) {
//       console.log(state);
//       console.log(action);
//       state.topCoins.push(getListOfCoins);
//     },
//     removeCoins(state, action) {},
//   },
// });
// export const { getCoins, removeCoins } = getTopCoinsSlice.actions;
// export default getTopCoinsSlice.reducer;
