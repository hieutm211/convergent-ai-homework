import { Flex, Loader } from "@mantine/core";
import { useNavigate } from "react-router";

export function Index() {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/auth/sign-in");
  }, 1500);

  return (
    <Flex justify="center" align="center" h="100vh">
      <Loader size={30} />
    </Flex>
  );
}
