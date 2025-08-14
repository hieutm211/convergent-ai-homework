import { RadarChart } from "@mantine/charts";
import { Button, FocusTrap, Modal, Stack, Text } from "@mantine/core";
import { NavLink } from "react-router";

type Props = { opened: boolean };

const data = [
  {
    product: "Apples",
    sales: 120,
  },
  {
    product: "Oranges",
    sales: 98,
  },
  {
    product: "Tomatoes",
    sales: 86,
  },
  {
    product: "Grapes",
    sales: 99,
  },
  {
    product: "Bananas",
    sales: 85,
  },
  {
    product: "Lemons",
    sales: 65,
  },
];

export function ResultModal(props: Props) {
  const { opened } = props;
  return (
    <Modal
      opened={opened}
      onClose={() => {}}
      withCloseButton={false}
      closeOnClickOutside={false}
      closeOnEscape={false}
    >
      <FocusTrap.InitialFocus />
      <Stack p="md" align="center">
        <Text fw={600} fz="h2">
          Excellent!
        </Text>

        <Text c="dimmed" size="sm">
          You scored{" "}
          <Text component="span" fw={600} c="red" fz="lg">
            32
          </Text>{" "}
          out of 100. Keep practicing!
        </Text>
        <RadarChart
          h={300}
          w="100%"
          data={data}
          dataKey="product"
          withPolarRadiusAxis
          series={[{ name: "sales", color: "blue.4", opacity: 0.2 }]}
        />
        <NavLink to="/home" style={{ textDecoration: "none", width: "100%" }}>
          <Button w="100%">Go to dashboard</Button>
        </NavLink>
      </Stack>
    </Modal>
  );
}
