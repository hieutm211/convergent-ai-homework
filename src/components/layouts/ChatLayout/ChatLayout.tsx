import { AppShell } from "@mantine/core";
import { Outlet } from "react-router";
import { Header } from "./Header";
import classes from "./Main.module.css";
import { Aside } from "./Aside";

export function ChatLayout() {
  return (
    <AppShell
      header={{ height: 60 }}
      aside={{
        width: 350,
        breakpoint: "md",
        collapsed: { desktop: false, mobile: true },
      }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>
      <AppShell.Aside>
        <Aside />
      </AppShell.Aside>
      <AppShell.Main className={classes.main}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
