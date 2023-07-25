import {
  Group,
  Text,
  Accordion,
  ThemeIcon,
  Button,
  Badge,
  Flex,
  Title,
  ActionIcon,
  Tooltip,
  ScrollArea,
  Divider,
  TextInput,
  Paper,
  Stack,
} from "@mantine/core";
import {
  IconCamera,
  IconDoorExit,
  IconReportSearch,
  IconSend,
} from "@tabler/icons-react";
import React, { useState } from "react";

const charactersList = [
  {
    title: "RDM",
    category: "Player",
    description: "Created 10mins ago",
    content: "lorem ipsum",
    adminchat: [
      { id: "player", name: "syno", chat: "Hola" },
      { id: "admin", name: "Nick", chat: "hi" },
      { id: "player", name: "syno", chat: "ih" },
      { id: "admin", name: "Nick", chat: "ki" },
      { id: "player", name: "syno", chat: "ik" },
      { id: "admin", name: "Nick", chat: "bacd" },
    ],
  },
  {
    title: "Player not visible",
    category: "Bug",
    description: "created 2hrs ago",
    content: "lorem ipsum",
    adminchat: [
      { id: "admin", name: "Nick", chat: "hi" },
      { id: "player", name: "syno", chat: "ih" },
      { id: "admin", name: "Nick", chat: "ki" },
      { id: "player", name: "syno", chat: "ik" },
      { id: "admin", name: "Nick", chat: "bacd" },
    ],
  },
  {
    title: "TDM",
    category: "Player",
    description: "Created  yesterday",
    content: "lorem ipsum",
    adminchat: [
      { id: "admin", name: "Nick", chat: "hi" },
      { id: "player", name: "syno", chat: "ih" },
      { id: "admin", name: "Nick", chat: "ki" },
      { id: "player", name: "syno", chat: "ik" },
      { id: "admin", name: "Nick", chat: "bacd" },
    ],
  },
];

interface AccordionLabelProps {
  title: string;
  category: string;
  description: string;
  content: string;
  adminchat: any[];
}

function AccordionLabel({ title, category }: AccordionLabelProps) {
  return (
    <Group noWrap>
      <ThemeIcon
        variant='light'
        radius='md'
        size='xl'
        color='cyan'>
        <IconReportSearch />
      </ThemeIcon>
      <Flex
        gap='md'
        justify='center'
        align='center'
        direction='row'>
        <Text
          tt={"uppercase"}
          size='lg'
          weight={700}>
          {title}
        </Text>
        <Badge
          color='cyan'
          size='sm'
          radius='lg'>
          {category}
        </Badge>
      </Flex>
    </Group>
  );
}

export default function ReportCard() {
  const [state, setState] = useState(false);
  const [reportData, setReportData] = useState({
    title: "",
    category: "",
    description: "",
    content: "",
    adminchat: [] as string[],
  });

  function handleOpenReport(reportData: AccordionLabelProps) {
    setState(true);
    setReportData(reportData);
  }

  function handleBackToReport(e: any) {
    e.preventDefault();
    setState(false);
    setReportData({
      title: "",
      category: "",
      description: "",
      content: "",
      adminchat: [],
    });
  }

  const chat = reportData.adminchat.map((value: any, index) => (
    <Stack>
      {value.id === "player" ? (
        <Group
          position='left'
          style={{ gap: "1px" }}>
          <Flex
            gap={"1px"}
            justify='center'
            align='center'
            direction='column'
            wrap='wrap'>
            <Text
              tt={"uppercase"}
              ta={"left"}
              mx={5}
              c={"blue"}>
              {value.name}
            </Text>
            <Paper
              bg={"#7676769c"}
              p='md'
              key={index}
              maw={450}
              miw={20}
              mx={10}
              my={10}
              shadow='xs'
              radius='lg'>
              <Text ta={"right"}>{value.chat}</Text>
            </Paper>
          </Flex>
        </Group>
      ) : (
        <Group
          position='right'
          style={{ gap: "1px" }}>
          <Flex
            gap={"1px"}
            justify='center'
            align='center'
            direction='column'
            wrap='wrap'>
            <Text
              tt={"uppercase"}
              ta={"left"}
              mx={5}>
              {value.name}{" "}
              <Text
                span
                c='red'
                inherit>
                - Admin
              </Text>
            </Text>
            <Paper
              bg={"#7676769c"}
              p='md'
              key={index}
              maw={450}
              miw={20}
              mx={10}
              my={10}
              shadow='xs'
              radius='lg'>
              <Text ta={"right"}>{value.chat}</Text>
            </Paper>
          </Flex>
        </Group>
      )}
    </Stack>
  ));

  const items = charactersList.map((item) => (
    <Accordion.Item
      value={item.title}
      key={item.title}>
      <Accordion.Control>
        <AccordionLabel {...item} />
      </Accordion.Control>
      <Accordion.Panel>
        <Text ta={"left"}>{item.description}</Text>
        <Group
          position='left'
          mt={10}>
          <Button
            variant='light'
            color='cyan'
            radius='md'
            size='md'
            uppercase>
            close the report
          </Button>
          <Button
            variant='light'
            color='cyan'
            radius='md'
            size='md'
            onClick={(e) => handleOpenReport(item)}
            uppercase>
            open the report
          </Button>
        </Group>
        <Text> </Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <div>
      {state ? (
        <>
          <Group
            position='apart'
            my={5}>
            <Text>{""}</Text>
            <Title>{reportData.title}</Title>
            <Tooltip
              label='Back To Report'
              color='cyan'
              position='right'
              withArrow
              transitionProps={{
                transition: "slide-left",
                duration: 300,
              }}>
              <ActionIcon
                color='cyan'
                size='xl'
                radius='md'
                variant='light'>
                <IconDoorExit
                  onClick={(e) => handleBackToReport(e)}
                  size='2.0rem'
                />
              </ActionIcon>
            </Tooltip>
          </Group>
          <Divider></Divider>
          <ScrollArea
            my={10}
            h={500}
            bg={""}
            style={{ borderRadius: "10px" }}
            // offsetScrollbars
            scrollHideDelay={0}>
            {chat}
          </ScrollArea>
          <TextInput
            placeholder='Type..'
            radius='md'
            size='xl'
            styles={{ rightSection: { width: "110px" } }}
            rightSection={
              <>
                <ActionIcon
                  mx={5}
                  color='cyan'
                  size='xl'
                  radius='md'
                  variant='light'>
                  <IconCamera size='1.625rem' />
                </ActionIcon>
                <ActionIcon
                  color='cyan'
                  size='xl'
                  mr={1}
                  radius='md'
                  variant='light'>
                  <IconSend size='1.625rem' />
                </ActionIcon>
              </>
            }
          />
        </>
      ) : (
        <>
          <Title>MY REPORTS</Title>
          <Accordion
            mt={20}
            radius='lg'
            chevronPosition='right'
            variant='contained'>
            {items}
          </Accordion>
        </>
      )}
    </div>
  );
}
