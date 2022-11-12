import { Near, WalletConnection } from "../../../coreNear";
import { useCallback, useEffect, useState } from "react";
import { connectNear, connectWallet, ConnectConfig } from "../../../coreNear";

export function useNearConnection(config: ConnectConfig): {
  nearConnection: Near | null;
  walletConnection: WalletConnection | null;
  reloadWallet: () => void;
} {
  const [nearConnection, setNearConnection] = useState<Near | null>(null);
  const [walletConnection, setWalletConnection] =
    useState<WalletConnection | null>(null);

  useEffect(() => {
    connectNear(config).then((connection) => {
      setNearConnection(connection);
      setWalletConnection(connectWallet(connection));
    });
  }, [config]);

  const reloadWallet = useCallback(() => {
    if (nearConnection) {
      setWalletConnection(connectWallet(nearConnection));
    }
  }, [nearConnection]);

  return {
    nearConnection,
    walletConnection,
    reloadWallet,
  };
}
