import { FC, useCallback, useContext } from "react";
import { SpinSwapPageContext } from "../../context";
import { Select } from "@mantine/core";

export const TickerSelector: FC = () => {
  const { marketsData, activeMarketId, dispatch } =
    useContext(SpinSwapPageContext);

  const setTicker = useCallback(
    (value: string) => {
      dispatch({
        type: "update-active-market-id",
        payload: value,
      });
    },
    [dispatch]
  );

  if (!marketsData) {
    return null;
  }

  return (
    <Select
      value={activeMarketId || undefined}
      placeholder="Choose ticker"
      onChange={setTicker}
      data={marketsData.map((item) => ({
        value: item.id.toString(),
        label: `${item.base.ticker}/${item.quote.ticker}`,
      }))}
    />
  );
};
