import { FC, ReactNode } from "react";
import { Container, MantineProvider } from "@mantine/core";
import { TopMenu } from "../TopMenu";

export interface LayoutProps {
  children: ReactNode;
}

export const Layout: FC<LayoutProps> = (props) => {
  return (
    <MantineProvider
      theme={{
        globalStyles: (theme) => ({
          body: {
            margin: 0,
          },
        }),
      }}
    >
      <Container size="sm">
        <TopMenu />
        {props.children}
      </Container>
    </MantineProvider>
  );
};
