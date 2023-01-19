export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  queryPrice: number;
  queryQuantity: number;
  market_cap_rank: number;
  price_change_percentage_24h: number;
  market_cap: number;
}

export interface IMarketData {}

export interface IState {
  coins: {
    coins: ICoin[];
  };
  portfolioCoins: {
    portfolioCoins: ICoin[];
  };
}
