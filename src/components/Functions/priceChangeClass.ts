type PriceChangeCheck = (arg: number) => string;

export const priceChangeClass: PriceChangeCheck = (priceChange) => {
  if (priceChange > 0) {
    return "percentagePlus";
  } else {
    return "percentageMinus";
  }
};
