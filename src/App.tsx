import React from "react";
import { WalletProvider } from "./lib/wallet/";
import { Layout } from "./components/Layout/";
import { SpinSwap } from "./pages/spinSwap";
import { keyStores } from "./lib/coreNear";
import { SignedIn } from "./components/SignedIn";

const connectionConfig = {
  networkId: "testnet",
  keyStore: new keyStores.BrowserLocalStorageKeyStore(),
  nodeUrl: "https://rpc.testnet.near.org",
  walletUrl: "https://wallet.testnet.near.org",
  helperUrl: "https://helper.testnet.near.org",
  explorerUrl: "https://explorer.testnet.near.org",
};

function App() {
  return (
    <WalletProvider config={connectionConfig}>
      <Layout>
        <SignedIn>
          <SpinSwap />
        </SignedIn>
      </Layout>
    </WalletProvider>
  );
}

export default App;
