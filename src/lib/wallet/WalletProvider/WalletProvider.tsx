import { FC, ReactNode, useCallback } from "react";
import { WalletContext } from "./walletContext";
import { useWalletBalance } from "./hooks/useWalletBalance";
import { useWalletAccount } from "./hooks/useWalletAccount";
import { useNearConnection } from "./hooks/useNearConnection";
import { useIsSignedIn } from "./hooks/useIsSignedIn";
import { ConnectConfig } from "../../coreNear";

export interface WalletProviderProps {
  children: ReactNode;
  config: ConnectConfig;
}

export const WalletProvider: FC<WalletProviderProps> = (props) => {
  const { walletConnection, reloadWallet } = useNearConnection(props.config);

  const { value: balance } = useWalletBalance(walletConnection);
  const account = useWalletAccount(walletConnection);
  const isSignedIn = useIsSignedIn(walletConnection);

  const requestSignIn = useCallback(() => {
    if (walletConnection) {
      walletConnection.requestSignIn({});
    }
  }, [walletConnection]);

  const signOut = useCallback(() => {
    if (walletConnection) {
      walletConnection.signOut();
      reloadWallet();
    }
  }, [walletConnection, reloadWallet]);

  return (
    <WalletContext.Provider
      value={{
        isSignedIn,
        account,
        requestSignIn,
        signOut,
        balance,
      }}
    >
      {props.children}
    </WalletContext.Provider>
  );
};
