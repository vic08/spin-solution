import { Account, Contract } from "../../../lib/coreNear";
import { SpinSwapContract } from "../types";
import { useEffect, useState } from "react";
import { useWallet } from "../../../lib/wallet";

function contractInstance(account: Account): SpinSwapContract {
  return new Contract(account, "app_2.spin_swap.testnet", {
    viewMethods: ["markets", "view_market"],
    changeMethods: [],
  }) as unknown as SpinSwapContract;
}

export function useContractInstance(): SpinSwapContract | null {
  const { account } = useWallet();

  const [contract, setContract] = useState(
    account ? contractInstance(account) : null
  );

  useEffect(() => {
    if (account) {
      setContract(contractInstance(account));
    }
  }, [account]);

  return contract;
}
