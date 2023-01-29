import { ICoin, ICoinPortfolio, IState } from "../interface/entities";

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

export type SearchedItemComp = (props: {
  item: ICoinPortfolio;
  openedID: string | null;
  setOpen: (props: string) => void;
  key: number;
}) => JSX.Element | null;

export type CoinOptionBlockComp = (props: {
  itemOption: ICoinPortfolio;
}) => JSX.Element | null;

export type addCoinToPortfolioFunc = (state: IState) => void;
