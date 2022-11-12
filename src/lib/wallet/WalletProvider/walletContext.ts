import { createContext } from "react";
import { Account } from "../../coreNear";

export interface WalletContextValue {
  isSignedIn: boolean;
  account: Account | null;
  requestSignIn: () => void;
  signOut: () => void;
  balance: string;
}

export const initialValue: WalletContextValue = {
  isSignedIn: false,
  account: null,
  requestSignIn: () => {},
  signOut: () => {},
  balance: "0",
};

export const WalletContext = createContext<WalletContextValue>(initialValue);
