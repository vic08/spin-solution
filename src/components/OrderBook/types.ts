export interface MarketOrder {
  price: number;
  quantity: number;
}

export interface Market {
  base: MarketTicker;
  quote: MarketTicker;
}

export interface MarketTicker {
  decimal: number;
  ticker: string;
}
