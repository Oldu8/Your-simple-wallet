type NumberFormat = (arg: number) => string;

export const priceFormatter: NumberFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}).format;

export const percentageFormatter: NumberFormat = new Intl.NumberFormat(
  "de-DE",
  {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }
).format;

export const capFormatter: NumberFormat = new Intl.NumberFormat("de-DE", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
}).format;

export const quantityFormatter: NumberFormat = new Intl.NumberFormat("de-DE", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
}).format;
