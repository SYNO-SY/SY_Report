import {
  Badge,
  Divider,
  Tabs,
  createStyles,
  getStylesRef,
} from "@mantine/core";
import { IconHome2, IconMessageReport, IconInbox } from "@tabler/icons-react";
import { useState } from "react";
import HomeTab from "../HomeComp/HomeTab";
import ReportTab from "../ReportComp";
import MyReportComp from "../MyReportComp";

const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.lg,
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 400,

    "&:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
      .color,

    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
          .color,
      },
    },
  },
}));

export default function ContentComp() {
  const { classes, cx } = useStyles();
  const [active, setActive] = useState("home");
  const reportcount = 2;
  return (
    <Tabs
      h={650}
      radius='md'
      orientation='vertical'
      defaultValue='home'>
      <Tabs.List
        w={200}
        px={5}
        py={5}>
        <Tabs.Tab
          className={cx(classes.link, {
            [classes.linkActive]: "home" === active,
          })}
          value='home'
          my={5}
          onClick={(event) => {
            event.preventDefault();
            setActive("home");
          }}
          icon={
            <IconHome2
              className={classes.linkIcon}
              stroke={1.8}
              size='1.5rem'
            />
          }>
          Home
        </Tabs.Tab>
        <Tabs.Tab
          className={cx(classes.link, {
            [classes.linkActive]: "report" === active,
          })}
          onClick={(event) => {
            event.preventDefault();
            setActive("report");
          }}
          my={5}
          value='report'
          icon={
            <IconMessageReport
              className={classes.linkIcon}
              stroke={1.8}
              size='1.5rem'
            />
          }>
          Report
        </Tabs.Tab>
        <Tabs.Tab
          className={cx(classes.link, {
            [classes.linkActive]: "myreports" === active,
          })}
          onClick={(event) => {
            event.preventDefault();
            setActive("myreports");
          }}
          my={5}
          value='myreports'
          icon={
            <IconInbox
              className={classes.linkIcon}
              stroke={1.8}
              size='1.5rem'
            />
          }
          rightSection={
            <Badge
              w={24}
              h={24}
              sx={{ pointerEvents: "none" }}
              variant='filled'
              size='xl'
              p={0}>
              {reportcount}
            </Badge>
          }>
          My Reports
        </Tabs.Tab>
        <Tabs.Tab
          value='account'
          disabled
          mt='auto'>
          V 0.1{" "}
        </Tabs.Tab>
      </Tabs.List>
      <Divider orientation='vertical' />

      <Tabs.Panel
        value='home'
        pl='xs'
        w={"61rem"}
        h={"39rem"}>
        <HomeTab></HomeTab>
      </Tabs.Panel>
      <Tabs.Panel
        value='report'
        pl='xs'
        w={"61rem"}
        h={"39rem"}>
        <ReportTab />
      </Tabs.Panel>

      <Tabs.Panel
        value='myreports'
        pl='xs'
        w={"61rem"}
        h={"39rem"}>
        <MyReportComp></MyReportComp>
      </Tabs.Panel>
    </Tabs>
  );
}
