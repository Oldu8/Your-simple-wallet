export const priceChangeClass = (priceChange) => {
  if (priceChange > 0) {
    return "percentagePlus";
  } else {
    return "percentageMinus";
  }
};
