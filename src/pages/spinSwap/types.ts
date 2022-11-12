import { Contract } from "../../lib/coreNear";
import { ContractMethod } from "../../lib/contracts/types";

export interface SpinSwapContract extends Contract {
  markets: ContractMethod<Array<Market>>;
  view_market: ContractMethod<ViewMarketData, { market_id: number }>;
}

export interface Market {
  base: MarketTicker;
  quote: MarketTicker;
  fee: number;
  id: number;
}

export interface MarketTicker {
  address: string;
  decimal: number;
  ticker: string;
}

export interface ViewMarketData {
  ask_orders: MarketOrder[];
  bid_orders: MarketOrder[];
}

export interface MarketOrder {
  price: number;
  quantity: number;
}
