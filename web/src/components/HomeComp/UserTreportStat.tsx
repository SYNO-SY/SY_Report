import {
  Text,
  Card,
  createStyles,
  Divider,
  Paper,
  Center,
  ThemeIcon,
  Flex,
} from "@mantine/core";
import { IconFileDescription } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(-60deg, ${
      theme.colors[theme.primaryColor][4]
    } 0%, ${theme.colors[theme.primaryColor][7]} 100%)`,
    color: "white",
    padding: theme.spacing.xl,

    [theme.fn.smallerThan("xs")]: {
      flexDirection: "column",
    },
  },
}));

export default function UserTreportStat() {
  const totalreport = 10;
  const { classes } = useStyles();
  return (
    <Card
      withBorder
      w={320}
      radius='xl'
      padding='xl'
      className={classes.root}>
      <Flex
        mih={50}
        gap='md'
        justify='center'
        align='center'
        direction='row'
        wrap='wrap'>
        <ThemeIcon
          variant='filled'
          radius='md'
          size='lg'
          color='cyan'>
          <IconFileDescription />
        </ThemeIcon>
        <Text
          fz='lg'
          tt='uppercase'
          fw={700}>
          Total Reports
        </Text>
      </Flex>

      <Divider
        size='xs'
        color='gray.4'></Divider>
      <Text
        pt={9}
        fz='sm'
        fw={500}>
        Total Reports that you have submitted
      </Text>
      <Center>
        <Paper
          shadow='xs'
          radius='lg'
          bg={"gray.3"}
          p='xs'
          mt={10}
          w={50}>
          <Text
            c={"gray.8"}
            fz='sm'
            fw={700}>
            {totalreport}
          </Text>
        </Paper>
      </Center>
    </Card>
  );
}
