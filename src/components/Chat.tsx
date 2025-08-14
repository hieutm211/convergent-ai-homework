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
import { useRef, useState } from "react";

const Message = (props: { text: string; isUser: boolean }) => {
  const content = (
    <Text style={{ whiteSpace: "pre-wrap" }} size="sm">
      {props.text}
    </Text>
  );
  if (!props.isUser) return content;
  return (
    <Group justify="end">
      <Paper px="md" py="6px" withBorder style={{ borderRadius: 16 }}>
        {content}
      </Paper>
    </Group>
  );
};

type Message = {
  id: string;
  text: string;
  isUser: boolean;
};

export function Chat() {
  const messagesBoxRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: randomId(),
      isUser: false,
      text: "Hi there! I'm Convergent AI. Let's practice!",
    },
  ]);
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
      messagesBoxRef.current?.scrollTo({
        top: messagesBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
    setTimeout(() => {
      setMessages((prevState) => [
        ...prevState,
        {
          id: randomId(),
          isUser: false,
          text: "Hello World,\nthis is a long message to test the wrapping of the text.",
        },
      ]);
      setTimeout(() => {
        messagesBoxRef.current?.scrollTo({
          top: messagesBoxRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    }, 1000);
    setText("");
  };

  return (
    <Stack p="md" pt="xl" style={{ height: "calc(100vh - 60px)" }}>
      <Stack h="100%">
        <Stack
          h="100%"
          style={{ flexGrow: 1, overflow: "auto" }}
          ref={messagesBoxRef}
        >
          <Container size="md" w="100%" p={0}>
            <Stack gap="4px">
              {messages.map((message) => (
                <Message key={message.id} {...message} />
              ))}
            </Stack>
          </Container>
        </Stack>
        <Container size="md" pos="relative" p={0} w="100%">
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message..."
            py={2}
            minRows={3}
            maxRows={10}
            autosize
            styles={{
              input: {
                paddingBlock: 10,
              },
            }}
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
        </Container>
      </Stack>
    </Stack>
  );
}
