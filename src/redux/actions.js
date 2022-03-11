import { DOWNLOAD_COINS, REMOVE_COINS, ADD_COIN, DELETE_COIN } from "./types";

export function downloadCoins(data) {
  return {
    type: DOWNLOAD_COINS,
    payload: data,
  };
}

export function removeCoins() {
  return {
    type: REMOVE_COINS,
  };
}

export function deleteCoinFromPortfolio(data) {
  return {
    type: DELETE_COIN,
    payload: data,
  };
}

export function addCoinToPortfolio(data) {
  return {
    type: ADD_COIN,
    payload: data,
  };
}
