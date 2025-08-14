import { AppShell } from "@mantine/core";
import { Outlet } from "react-router";
import classes from "./Main.module.css";

export function AuthLayout() {
  return (
    <AppShell>
      <AppShell.Main className={classes.main}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
