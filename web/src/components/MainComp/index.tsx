import { Box, Flex, rem, createStyles } from "@mantine/core";
import HeaderComp from "../HeaderComp";
import ContentComp from "./ContainerTab";

const useStyles = createStyles((theme) => ({
  center: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
}));

function index() {
  const { classes } = useStyles();
  return (
    <div className={classes.center}>
      <Box
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          textAlign: "center",
          padding: rem(1),
          borderRadius: theme.radius.lg,
        })}>
        <Flex
          sx={(theme) => ({ borderRadius: theme.radius.lg })}
          mih={60}
          bg='rgba(0, 0, 0, .3)'
          gap='xs'
          justify='center'
          align='flex-start'
          direction='column'
          wrap='wrap'>
          <HeaderComp></HeaderComp>
          <ContentComp></ContentComp>
        </Flex>
      </Box>
    </div>
  );
}

export default index;
