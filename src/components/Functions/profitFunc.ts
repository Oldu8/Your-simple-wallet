export type ProfitFunc = (
  purchasePrice: number,
  numberOfPurchased: number,
  marketPrice: number
) => number;

export const profitFunc: ProfitFunc = (
  purchasePrice,
  numberOfPurchased,
  marketPrice
) => {
  const boughtSumm = purchasePrice * numberOfPurchased;
  const actualSumm = marketPrice * numberOfPurchased;
  const summDif = actualSumm - boughtSumm;
  return summDif;
};
