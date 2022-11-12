export interface State {
  activeMarketId: string | null;
}

export type Action = UpdateTickerAction;

export interface UpdateTickerAction {
  type: "update-active-market-id";
  payload: string;
}
