import { FC, memo } from "react";
import { Group, Button, Box, Text } from "@mantine/core";
import { useWallet } from "../../lib/wallet";
import { Account, utils } from "../../lib/coreNear";

export const WalletPanel: FC = () => {
  const { isSignedIn, balance, account, requestSignIn, signOut } = useWallet();

  return (
    <WalletPanelView
      isSignedIn={isSignedIn}
      account={account}
      balance={balance}
      requestSignIn={requestSignIn}
      signOut={signOut}
    />
  );
};

interface WalletPanelViewProps {
  balance: string;
  isSignedIn: boolean;
  account: Account | null;
  requestSignIn: () => void;
  signOut: () => void;
}

export const WalletPanelView: FC<WalletPanelViewProps> = memo((props) => {
  const { isSignedIn, requestSignIn, signOut, account, balance } = props;
  return (
    <Group>
      {!isSignedIn ? <Button onClick={requestSignIn}>Sign In</Button> : null}
      {account && isSignedIn ? (
        <Box>
          <Text>Wallet address: {account.accountId}</Text>
        </Box>
      ) : null}
      {isSignedIn && typeof balance === "string" ? (
        <Box>
          <Text>Balance: {utils.format.formatNearAmount(balance, 2)}</Text>
        </Box>
      ) : null}
      {isSignedIn ? <Button onClick={signOut}>Sign Out</Button> : null}
    </Group>
  );
});
