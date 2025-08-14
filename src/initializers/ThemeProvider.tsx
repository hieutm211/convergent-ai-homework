import { MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export function ThemeProvider(props: { children: React.ReactNode }) {
  const { children } = props;
  return <MantineProvider>{children}</MantineProvider>;
}
