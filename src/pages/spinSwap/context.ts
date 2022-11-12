import { createContext } from "react";
import { Action, State } from "./state/types";
import { Market, ViewMarketData } from "./types";

export interface SpinSwapPageContextValue extends State {
  marketsData: Market[] | null;
  viewMarketData: ViewMarketData | null;
  dispatch: (action: Action) => void;
}

export const initialValue: SpinSwapPageContextValue = {
  activeMarketId: null,
  marketsData: null,
  viewMarketData: null,
  dispatch: (action: Action) => {},
};

export const SpinSwapPageContext =
  createContext<SpinSwapPageContextValue>(initialValue);
