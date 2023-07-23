import {
  Avatar,
  Divider,
  Flex,
  Group,
  Paper,
  Stack,
  Text,
} from "@mantine/core";
import AdminTable from "./AdminTable";
import UserStat from "./UserTreportStat";
import UserPreportStat from "./UserPreportStat";
import { CustomFonts } from "../../theme/CustomFonts";

function Admin() {
  return (
    <Group position='center'>
      <Paper
        shadow='xl'
        radius='lg'
        bg='dark.9'
        w={500}
        h={390}>
        <h3>Admins</h3>

        <AdminTable></AdminTable>
      </Paper>

      <Stack
        align='center'
        w={400}>
        <UserStat></UserStat>
        <UserPreportStat></UserPreportStat>
      </Stack>
    </Group>
  );
}

function HomeTab() {
  const profile_image =
    "https://avatars.githubusercontent.com/u/89760730?s=96&v=4";
  const profile_name = "SYNO";
  const discord = "843402061717438495";
  const steam = "843402061717438495";
  const license = "843402061717438495";
  return (
    <>
      <CustomFonts />
      <Flex
        gap='md'
        justify='center'
        align='center'
        direction='column'>
        <Avatar
          radius='lg'
          size='xl'
          src={profile_image}
          alt={profile_name}
        />
        <Text>{profile_name}</Text>
        <Stack
          align='flex-start'
          spacing={"1px"}>
          <Text>Discord ID: {discord}</Text>
          <Text>Steam ID: {steam}</Text>
          <Text>License ID: {license}</Text>
        </Stack>
      </Flex>
      <Divider my='sm' />
      <Admin></Admin>
    </>
  );
}

export default HomeTab;
