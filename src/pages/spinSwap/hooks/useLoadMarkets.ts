import { Market, SpinSwapContract } from "../types";
import { TransactionStatus, TxHook } from "../../../lib/contracts/types";
import { useCallback, useState } from "react";

export function useLoadMarkets(
  contract: SpinSwapContract | null
): TxHook<Array<Market>> {
  const [data, setData] = useState<Array<Market> | null>(null);
  const [status, setStatus] = useState<TransactionStatus>("initial");

  const load = useCallback(async () => {
    if (contract) {
      setStatus("pending");
      contract
        .markets({})
        .then((response) => {
          setData(response);
          setStatus("success");
        })
        .catch((e) => {
          setStatus("error");
        });
    }
  }, [contract]);

  return {
    data,
    load,
    status,
  };
}
