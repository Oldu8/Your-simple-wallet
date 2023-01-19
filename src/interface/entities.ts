export interface ICoin {
  id: string;
  symbol: string;
  name: string;
  image: {
    large: string;
    small: string;
    thumb: string;
  };
  market_data: IMarketData;
  queryPrice: number;
  queryQuantity: number;
}

export interface IMarketData {
  market_cap_rank: number;
  price_change_percentage_24h: number;
  current_price: number;
  market_cap: number;
}

export interface IState {
  coins: {
    coins: ICoin[];
  };
  portfolioCoins: {
    portfolioCoins: ICoin[];
  };
}
