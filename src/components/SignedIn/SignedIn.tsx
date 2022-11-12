import { FC, ReactNode } from "react";
import { useWallet } from "../../lib/wallet";

interface SignedInProps {
  children: ReactNode;
}

export const SignedIn: FC<SignedInProps> = (props) => {
  const { isSignedIn } = useWallet();

  if (!isSignedIn) {
    return null;
  }

  return <>{props.children}</>;
};
