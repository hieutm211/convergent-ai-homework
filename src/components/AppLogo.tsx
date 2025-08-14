import { Group, type GroupProps } from "@mantine/core";

export function AppLogo(props: GroupProps) {
  return (
    <Group bg="black" w="36" h="36" style={{ borderRadius: 8 }} {...props}>
      <img
        src={`data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20viewBox%3D%220%200%2040%2037%22%3E%3Cg%20transform%3D%22translate(0.034%200.033)%22%20id%3D%22ss9531840450_1%22%3E%3Cpath%20d%3D%22M%200%200%20L%2039.864%200%20L%2039.864%2036.833%20L%200%2036.833%20Z%22%20fill%3D%22transparent%22%3E%3C%2Fpath%3E%3Cg%20transform%3D%22translate(0.315%200.05)%22%20id%3D%22ss9531840450_3%22%3E%3Cpath%20d%3D%22M%200%2035.651%20C%2011.249%2033.33%2019.668%2018.069%2019.668%200%22%20fill%3D%22transparent%22%20stroke-width%3D%222.03%22%20stroke%3D%22rgb(255%2C255%2C255)%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M%2039.301%2035.651%20C%2028.053%2033.33%2019.634%2018.069%2019.634%200%22%20fill%3D%22transparent%22%20stroke-width%3D%222.03%22%20stroke%3D%22rgb(255%2C255%2C255)%22%20stroke-linejoin%3D%22round%22%3E%3C%2Fpath%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E`}
      />
    </Group>
  );
}
