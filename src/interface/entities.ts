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
export interface ICoinPortfolio {
  id: string;
  symbol: string;
  name: string;
  image: {
    small: string;
    large: string;
    thumb: string;
  };
  market_data: {
    current_price: {
      usd: number;
    };
  };
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
    portfolioCoins: ICoinPortfolio[];
  };
}
export interface IStatePortfolioSlice {
  portfolioCoins: ICoinPortfolio[];
}

export interface IStateCoinsSlice {
  coins: ICoin[];
}

export interface AddCoinAction {
  type?: string;
  payload?: {
    id: string;
    queryPrice: number;
    queryQuantity: number;
  };
}
