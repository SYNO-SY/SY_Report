import {
  Group,
  Text,
  Accordion,
  ThemeIcon,
  Button,
  Badge,
  Flex,
} from "@mantine/core";
import { IconReportSearch } from "@tabler/icons-react";

const charactersList = [
  {
    title: "RDM",
    category: "Player",
    description: "Created 10mins ago",
    content: "lorem ipsum",
  },
  {
    title: "Player not visible",
    category: "Bug",
    description: "created 2hrs ago",
    content: "lorem ipsum",
  },
  {
    title: "TDM",
    category: "Player",
    description: "Created  yesterday",
    content: "lorem ipsum",
  },
];

interface AccordionLabelProps {
  title: string;
  category: string;
  description: string;
}

function AccordionLabel({ title, category, description }: AccordionLabelProps) {
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
            uppercase>
            open the report
          </Button>
        </Group>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      mt={20}
      radius='lg'
      chevronPosition='right'
      variant='contained'>
      {items}
    </Accordion>
  );
}
