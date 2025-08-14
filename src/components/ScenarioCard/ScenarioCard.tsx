import { Card, Progress, Text } from "@mantine/core";
import classes from "./ScenarioCard.module.css";

export function ScenarioCard(props: {
  title: string;
  description: string;
  progress: number;
}) {
  const {
    title = "5.3 minor release (September 2022)",
    description = "Form context management, Switch, Grid and Indicator components improvements, new hook and 10+ other changes",
  } = props;
  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Text fz="lg" fw={500} mt="md">
        {title}
      </Text>
      <Text fz="sm" c="dimmed" mt={5}>
        {description}
      </Text>

      <Text c="dimmed" fz="sm" mt="md">
        Tasks completed:{" "}
        <Text span fw={500} c="bright">
          23/36
        </Text>
      </Text>

      <Progress value={(23 / 36) * 100} mt={5} />
    </Card>
  );
}
