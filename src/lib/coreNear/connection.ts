import { connect, Near, WalletConnection, ConnectConfig } from "near-api-js";

export async function connectNear(config: ConnectConfig) {
  return connect(config);
}

export function connectWallet(nearConnection: Near): WalletConnection {
  return new WalletConnection(nearConnection, null);
}
