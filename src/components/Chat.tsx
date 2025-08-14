import {
  ActionIcon,
  Container,
  Group,
  Paper,
  Stack,
  Text,
  Textarea,
} from "@mantine/core";
import { randomId } from "@mantine/hooks";
import { IconArrowUp } from "@tabler/icons-react";
import { useState } from "react";

const Message = (props: { text: string; isUser: boolean }) => {
  const content = (
    <Text style={{ whiteSpace: "pre-wrap" }} size="sm">
      {props.text}
    </Text>
  );
  if (!props.isUser) return content;
  return (
    <Group justify="end">
      <Paper px="md" py={5} withBorder style={{ borderRadius: 16 }}>
        {content}
      </Paper>
    </Group>
  );
};

export function Chat() {
  const [messages, setMessages] = useState<
    {
      id: string;
      text: string;
      isUser: boolean;
    }[]
  >([]);
  const [text, setText] = useState("");

  const handleSend = () => {
    const trimmedText = text.trim();
    if (trimmedText === "") return;
    setMessages((prevState) => [
      ...prevState,
      {
        id: randomId(),
        isUser: true,
        text: trimmedText,
      },
    ]);
    setTimeout(() => {
      setMessages((prevState) => [
        ...prevState,
        {
          id: randomId(),
          isUser: false,
          text: "Hello World,\nthis is a long message to test the wrapping of the text.",
        },
      ]);
    }, 1000);
    setText("");
  };

  return (
    <Container
      size="md"
      p="md"
      pt="xl"
      style={{ height: "calc(100vh - 60px)" }}
    >
      <Stack h="100%">
        <Stack h="100%" style={{ flexGrow: 1, overflow: "auto" }} gap="5">
          {messages.map((message) => (
            <Message key={message.id} {...message} />
          ))}
        </Stack>
        <Stack pos="relative" w="100%">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            minRows={3}
            maxRows={10}
            autosize
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
          />
          <ActionIcon
            pos="absolute"
            bottom={16}
            right={16}
            size="lg"
            radius="xl"
            onClick={handleSend}
          >
            <IconArrowUp size={24} />
          </ActionIcon>
        </Stack>
      </Stack>
    </Container>
  );
}
