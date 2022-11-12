import { FC, useEffect, useReducer } from "react";
import { SimpleGrid } from "@mantine/core";
import { initialValue, SpinSwapPageContext } from "./context";
import { reducer } from "./state/reducer";
import { TickerSelector } from "./components/TickerSelector";
import { useContractInstance } from "./hooks/useContractInstance";
import { useLoadViewMarket } from "./hooks/useLoadViewMarket";
import { useLoadMarkets } from "./hooks/useLoadMarkets";
import { OrderBookContainer } from "./components/OrderBookContainer/";

export const SpinSwap: FC = () => {
  const [context, dispatch] = useReducer(reducer, initialValue);

  const contract = useContractInstance();

  const { data: marketsData, load: loadMarkets } = useLoadMarkets(contract);

  const { data: viewMarketData, load: loadViewMarket } = useLoadViewMarket(
    contract,
    Number(context.activeMarketId)
  );

  useEffect(() => {
    loadMarkets({});
  }, [loadMarkets]);

  useEffect(() => {
    loadViewMarket();
  }, [loadViewMarket]);

  if (!marketsData) {
    return null;
  }

  return (
    <SpinSwapPageContext.Provider
      value={{ ...context, marketsData, viewMarketData, dispatch }}
    >
      <SimpleGrid
        cols={1}
        spacing="md"
        sx={(theme) => ({ maxWidth: theme.breakpoints.xs, margin: "0 auto" })}
      >
        <TickerSelector />
        <OrderBookContainer />
      </SimpleGrid>
    </SpinSwapPageContext.Provider>
  );
};
