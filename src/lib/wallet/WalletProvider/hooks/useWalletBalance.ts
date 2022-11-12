import { WalletConnection } from "../../../coreNear";
import { useCallback, useEffect, useState } from "react";

export function useWalletBalance(wallet: WalletConnection | null): {
  value: string;
  reload: () => void;
} {
  const [value, setValue] = useState("0");

  const reload = useCallback(() => {
    if (wallet) {
      wallet
        .account()
        .getAccountBalance()
        .then((balance) => {
          setValue(balance.total);
        });
    }
  }, [wallet]);

  useEffect(() => {
    reload();
  }, [reload]);

  return {
    value,
    reload,
  };
}
