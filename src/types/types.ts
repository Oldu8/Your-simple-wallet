import { ICoin, ICoinPortfolio } from "../interface/entities";

export type ItemListFunc = (props: { item: ICoin }) => JSX.Element | null;
export type ItemPortfolioFunc = (props: {
  item: ICoinPortfolio;
}) => JSX.Element | null;

export type ChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => void;
export type DebouncedChangeHandler = (e: string) => void;

export type ModalWindowFunc = (props: {
  isModal: boolean;
  modalClose: () => void;
}) => JSX.Element | null;