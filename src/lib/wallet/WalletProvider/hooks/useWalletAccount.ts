import { Account, WalletConnection } from "../../../coreNear";
import { useEffect, useState } from "react";

export function useWalletAccount(
  wallet: WalletConnection | null
): Account | null {
  const [account, setAccount] = useState(wallet?.account() || null);

  useEffect(() => {
    if (wallet) {
      setAccount(wallet.account());
    }
  }, [wallet]);

  return account;
}
