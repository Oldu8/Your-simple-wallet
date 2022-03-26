export const profitFunc = (boughtPrice, boutQuantity, marketPrice) => {
  const boughtSumm = boughtPrice * boutQuantity;
  const actualSumm = marketPrice * boutQuantity;
  const summDif = actualSumm - boughtSumm;
  return summDif;
};
