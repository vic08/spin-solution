import { WalletConnection } from "../../../coreNear";
import { useEffect, useState } from "react";

export function useIsSignedIn(wallet: WalletConnection | null) {
  const [isSignedIn, setIsSignedIn] = useState(
    wallet ? wallet.isSignedIn() : false
  );

  useEffect(() => {
    if (wallet) {
      setIsSignedIn(wallet.isSignedIn());
    }
  }, [wallet]);

  return isSignedIn;
}
