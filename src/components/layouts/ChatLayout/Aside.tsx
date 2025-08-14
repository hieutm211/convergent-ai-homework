import { Alert, Button, Divider, Group, Stack, Text } from "@mantine/core";
import { useState } from "react";
import { ResultModal } from "./ResultModal";

export function Aside() {
  const [showResult, setShowResult] = useState(false);

  return (
    <>
      <Stack p="md">
        <Group justify="space-between">
          <Text size="sm" fw={600}>
            Score:{" "}
            <Text component="span" c="red" fw="inherit">
              32
            </Text>
          </Text>
          {!showResult ? (
            <Button onClick={() => setShowResult(true)}>End Session</Button>
          ) : (
            <Button disabled>Session Ended</Button>
          )}
        </Group>
        <Divider />
        <Stack gap="xs">
          <Text fw={600}>Difficult Customer Handling</Text>
          <Text c="dimmed" size="sm">
            Chat with AI simulating people from different cultural backgrounds
            to practice being respectful, adaptable, and clear in diverse
            contexts
          </Text>
        </Stack>
        <Divider />
        <Alert variant="light" color="blue" title="Tips">
          Listen First, Respond Second
          <br />
          Let them explain fully without interruption.
          <br />
          Use active listening cues like:
          <br />
          “I understand this is frustrating for you.”
          <br />
          “Let me make sure I’ve got this right…”
        </Alert>
      </Stack>
      <ResultModal opened={showResult} />
    </>
  );
}
