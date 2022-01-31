import { DOWNLOAD_COINS, REMOVE_COINS } from "./types";

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
