import { useContext } from "react";
import {
  WalletContext,
  WalletContextValue,
} from "../WalletProvider/walletContext";

export const useWallet = (): WalletContextValue => {
  return useContext(WalletContext);
};
