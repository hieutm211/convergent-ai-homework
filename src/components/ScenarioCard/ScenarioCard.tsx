import { Card, Flex, Progress, Stack, Text } from "@mantine/core";
import classes from "./ScenarioCard.module.css";

export function ScenarioCard(props: {
  title: string;
  description: string;
  progress: number;
}) {
  const { title, description, progress } = props;
  return (
    <Card withBorder padding="lg" radius="md" className={classes.card}>
      <Flex h="100%" direction="column" gap={0} justify="space-between">
        <Stack gap={0}>
          <Text fz="lg" fw={500} mt="md">
            {title}
          </Text>
          <Text fz="sm" c="dimmed" mt={5}>
            {description}
          </Text>
        </Stack>

        <Stack gap={0}>
          <Text c="dimmed" fz="sm" mt="md">
            Progress:{" "}
            <Text span fw={500} c="bright">
              {progress}%
            </Text>
          </Text>

          <Progress value={progress} mt={5} />
        </Stack>
      </Flex>
    </Card>
  );
}
