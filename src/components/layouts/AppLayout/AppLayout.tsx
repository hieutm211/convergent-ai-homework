import { AppShell } from "@mantine/core";
import { Outlet } from "react-router";
import { Header } from "./Header";

export function AppLayout() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
