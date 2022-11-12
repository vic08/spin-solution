import { Action, State } from "./types";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "update-active-market-id":
      return updateActiveMarketId(state, action);
  }

  return state;
};

function updateActiveMarketId(state: State, action: Action): State {
  if (state.activeMarketId !== action.payload) {
    return {
      ...state,
      activeMarketId: action.payload,
    };
  }

  return state;
}
