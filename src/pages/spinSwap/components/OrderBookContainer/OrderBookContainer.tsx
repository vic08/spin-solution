import { FC, useContext, useMemo } from "react";
import { SpinSwapPageContext } from "../../context";
import { OrderBook } from "../../../../components/OrderBook";

export const OrderBookContainer: FC = () => {
  const { viewMarketData, activeMarketId, marketsData } =
    useContext(SpinSwapPageContext);

  const activeMarket = useMemo(() => {
    return marketsData?.find((item) => item.id === Number(activeMarketId));
  }, [marketsData, activeMarketId]);

  if (!viewMarketData || !activeMarket) {
    return null;
  }

  return (
    <OrderBook
      market={activeMarket}
      data={{ ask: viewMarketData.ask_orders, bid: viewMarketData.bid_orders }}
    />
  );
};
