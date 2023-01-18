import { ICoin } from "../../interface/entities";
import { RequestType } from "../../interface/request";
const apiCoin = "https://api.coingecko.com/api/v3/coins/";

export const getCoin: RequestType<string, ICoin[]> = async (id) => {
  let response = await fetch(apiCoin + id);
  let responseBody = await response.json();
  return responseBody;
};

const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=`;

export const getTopCoins: RequestType<string, ICoin[]> = async (page) => {
  let response = await fetch(`${api} + ${page}`);
  const data = await response.json();
  return data;
};
