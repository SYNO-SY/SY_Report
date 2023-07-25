import {
  Avatar,
  Badge,
  Table,
  Group,
  Text,
  ScrollArea,
  Button,
  Flex,
  Tooltip,
  Indicator,
} from "@mantine/core";

const data = [
  {
    avatar:
      "https://cdn.discordapp.com/attachments/954263572874137671/1052260551440482384/sachu.jpg",
    name: "SYNO",
    active: true,
  },
  {
    avatar: "https://avatars.githubusercontent.com/u/123115522?v=4",
    name: "Nick",
    active: false,
  },

  {
    avatar: "",
    name: "AK",
    active: false,
  },
  {
    avatar: "",
    name: "Ayyu",
    active: true,
  },
  {
    avatar: "",
    name: "Bazzi",
    active: true,
  },
];

export default function AdminTable() {
  const rows = data.map((item) => (
    <tr key={item.name}>
      <td>
        <Group spacing='sm'>
          {item.active ? (
            <Indicator
              color='green'
              radius='md'
              size={14}
              withBorder
              processing>
              <Avatar
                size={40}
                src={item.avatar}
                // radius={40}
              />
            </Indicator>
          ) : (
            <Indicator
              color='red'
              radius='md'
              size={14}
              withBorder
              processing>
              <Avatar
                size={40}
                src={item.avatar}
              />
            </Indicator>
          )}

          <div>
            <Text
              w={120}
              ta={"left"}
              fz='sm'
              fw={400}>
              {item.name}
            </Text>
          </div>
        </Group>
      </td>
      <td>
        <Flex
          justify='flex-start'
          align='center'
          direction='row'
          wrap='wrap'>
          {item.active ? (
            <Badge>Active</Badge>
          ) : (
            <Badge color='red'>offline</Badge>
          )}
        </Flex>
      </td>
      <td>
        <Flex
          justify='flex-start'
          align='center'
          direction='row'
          wrap='wrap'>
          {item.active ? (
            <Button
              variant='light'
              radius='md'
              uppercase>
              call
            </Button>
          ) : (
            <Tooltip
              label="Can't make call"
              transitionProps={{ transition: "pop", duration: 300 }}>
              <Button
                variant='light'
                color='red'
                radius='md'
                data-disabled
                sx={{
                  "&[data-disabled]": {
                    pointerEvents: "all",
                    color: "#ffc9c9",
                    backgroundColor: "rgb(224 49 49 / 20%)",
                  },
                }}
                onClick={(event) => event.preventDefault()}
                uppercase>
                call
              </Button>
            </Tooltip>
          )}
        </Flex>
      </td>
    </tr>
  ));

  return (
    <ScrollArea
      h={300}
      scrollHideDelay={0}>
      <Table
        miw={200}
        verticalSpacing='sm'>
        <thead>
          <tr>
            <th>Admins</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
    </ScrollArea>
  );
}
