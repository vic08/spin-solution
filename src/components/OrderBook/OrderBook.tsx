import { FC, memo, ReactNode } from "react";
import { MarketOrder } from "./types";
import { Table, Text } from "@mantine/core";
import { formatNumber } from "../../lib/util/number";
import { Market } from "./types";

const FORMAT_DECIMAL_PRECISION = 4;

interface OrderBookProps {
  market: Market;
  data: {
    ask: MarketOrder[];
    bid: MarketOrder[];
  };
}

export const OrderBook: FC<OrderBookProps> = memo((props) => {
  const {
    market,
    data: { ask, bid },
  } = props;

  function renderStack(values: MarketOrder[], type: "bid" | "ask"): ReactNode {
    return (
      <>
        {values.map((item) => (
          <tr>
            <td>
              <Text
                sx={(theme) => ({
                  color: theme.colors[type === "ask" ? "red" : "green"][9],
                })}
              >
                {formatNumber(
                  item.price,
                  market.quote.decimal,
                  FORMAT_DECIMAL_PRECISION
                )}
              </Text>
            </td>
            <td>
              {formatNumber(
                item.quantity,
                market.base.decimal,
                FORMAT_DECIMAL_PRECISION
              )}
            </td>
            <td>
              {formatNumber(
                item.price * item.quantity,
                market.quote.decimal + market.base.decimal + 1,
                FORMAT_DECIMAL_PRECISION
              )}
            </td>
          </tr>
        ))}
      </>
    );
  }

  return (
    <Table>
      <thead>
        <tr>
          <td>Price ({market.quote.ticker})</td>
          <td>Size ({market.base.ticker})</td>
          <td>Total</td>
        </tr>
      </thead>
      <tbody>
        {renderStack(ask, "ask")}
        {renderStack(bid, "bid")}
      </tbody>
    </Table>
  );
});
