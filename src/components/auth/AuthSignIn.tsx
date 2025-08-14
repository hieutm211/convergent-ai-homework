import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { z } from "zod";
import classes from "./AuthSignIn.module.css";
import { useForm } from "@mantine/form";
import { useNavigate } from "react-router";

const schema = z.object({
  email: z.email("Invalid email"),
  password: z
    .string()
    .min(6, { error: "Password must be at least 6 characters" }),
  rememberMe: z.boolean(),
});
type FormValue = z.infer<typeof schema>;

export function AuthSignIn() {
  const navigate = useNavigate();

  const form = useForm<FormValue>({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validate: zod4Resolver(schema),
  });

  const onSubmit = (values: FormValue) => {
    console.log(values);
    navigate("/home");
  };

  return (
    <Container size={420} py={40} pt="10%">
      <Title ta="center" className={classes.title}>
        Welcome back!
      </Title>

      <Text className={classes.subtitle}>
        Do not have an account yet? <Anchor>Create account</Anchor>
      </Text>

      <form onSubmit={form.onSubmit(onSubmit)}>
        <Paper withBorder shadow="sm" p={22} mt={30} radius="md">
          <TextInput
            label="Email"
            placeholder="account@example.com"
            radius="md"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            radius="md"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox
              label="Remember me"
              key={form.key("rememberMe")}
              {...form.getInputProps("rememberMe", { type: "checkbox" })}
            />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" radius="md" type="submit">
            Sign in
          </Button>
        </Paper>
      </form>
    </Container>
  );
}
