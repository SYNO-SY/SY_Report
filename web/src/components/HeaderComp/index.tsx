import {
  createStyles,
  Header,
  Text,
  ActionIcon,
  Container,
  rem,
  Tooltip,
} from "@mantine/core";
import { IconSquareRoundedX, IconX } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  header: { borderRadius: rem(10) },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: rem(66),

    [theme.fn.smallerThan("sm")]: {
      justifyContent: "flex-start",
    },
  },
  headertext: {
    fontSize: "34px",
    textTransform: "uppercase",
  },
}));

export default function HeaderComp() {
  const { classes, cx } = useStyles();

  return (
    <Header
      className={classes.header}
      height={66}>
      <Container
        className={classes.inner}
        miw={1200}>
        <Text></Text>
        <Text className={classes.headertext}>Report System</Text>
        <Tooltip
          label='Close'
          color='cyan'
          withArrow
          transitionProps={{ transition: "pop", duration: 300 }}
          openDelay={0}>
          <ActionIcon
            color='cyan'
            size='xl'
            radius='lg'
            variant='light'>
            <IconX size='2.125rem' />
          </ActionIcon>
        </Tooltip>
      </Container>
    </Header>
  );
}
