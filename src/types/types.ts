import { ICoin } from "../interface/entities";

export type ItemListFunc = (props: {
  item: ICoin | null;
}) => JSX.Element | null;
