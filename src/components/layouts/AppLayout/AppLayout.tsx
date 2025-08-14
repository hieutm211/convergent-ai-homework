import { AppShell } from "@mantine/core";
import { Outlet } from "react-router";
import { Header } from "./Header";
import classes from "./Main.module.css";

export function AppLayout() {
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Main className={classes.main}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
