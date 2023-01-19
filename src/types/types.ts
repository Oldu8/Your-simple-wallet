import { ICoin, ICoinPortfolio } from "../interface/entities";

export type ItemListFunc = (props: { item: ICoin }) => JSX.Element | null;
export type ItemPortfolioFunc = (props: {
  item: ICoinPortfolio;
}) => JSX.Element | null;
