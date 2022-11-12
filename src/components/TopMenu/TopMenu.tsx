import { FC } from "react";
import { Box, Center } from "@mantine/core";
import { WalletPanel } from "../WalletPanel";

export const TopMenu: FC = () => {
  return (
    <Box py="md">
      <Center>
        <WalletPanel />
      </Center>
    </Box>
  );
};
