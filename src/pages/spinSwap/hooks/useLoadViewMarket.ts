import { SpinSwapContract } from "../types";
import { TransactionStatus, TxHook } from "../../../lib/contracts/types";
import { useCallback, useState } from "react";

export function useLoadViewMarket(
  contract: SpinSwapContract | null,
  marketId: number | null
): TxHook<any> {
  const [data, setData] = useState<any | null>(null);
  const [status, setStatus] = useState<TransactionStatus>("initial");

  const load = useCallback(async () => {
    if (contract && typeof marketId === "number") {
      setStatus("pending");
      setData(null);
      contract
        .view_market({ market_id: marketId })
        .then((response) => {
          setData(response);
          setStatus("success");
        })
        .catch((e) => {
          setStatus("error");
        });
    }
  }, [contract, marketId]);

  return {
    data,
    load,
    status,
  };
}
