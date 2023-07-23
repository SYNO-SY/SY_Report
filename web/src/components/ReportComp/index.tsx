import {
  Box,
  Button,
  Flex,
  SegmentedControl,
  Text,
  TextInput,
  Title,
  rem,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { IconAlertCircle } from "@tabler/icons-react";
import { useState } from "react";

function ReportTab() {
  const [value, setValue] = useState("bug");
  const [textvalue, setTextValue] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    if (textvalue.trim().length !== 0) {
      console.log(value);
      console.log(textvalue);
      setTextValue("");
      setValue("bug");
    } else {
      notifications.show({
        title: "Report ",
        message: "Report title shouldn't be empty",
        autoClose: 3000,
        icon: <IconAlertCircle />,

        styles: (theme) => ({
          root: {
            backgroundColor: "rgb(224 49 49 / 50%)",
            borderColor: theme.colors.red[6],
            borderRadius: 15,
            "&::before": { backgroundColor: theme.white },
          },

          title: { color: theme.white, fontSize: rem(21), fontWeight: 500 },
          description: {
            color: theme.white,
            fontSize: rem(16),
            fontWeight: 500,
          },
          icon: {
            color: theme.white,
            backgroundColor: theme.colors.red[3],
          },
          closeButton: {
            color: theme.white,
            "&:hover": { backgroundColor: theme.colors.red[7] },
          },
        }),
      });
    }
  }
  return (
    <>
      <Box mt={"20%"}>
        <Flex
          gap='xl'
          justify='center'
          align='center'
          direction='column'></Flex>
        <Title order={1}>CREATE YOUR REPORT</Title>
        <Text>
          Please fill the blanks and choose a report category, Admins will be
          replay soon
        </Text>

        <TextInput
          pt={20}
          w={350}
          mx={"auto"}
          value={textvalue}
          onChange={(e) => setTextValue(e.currentTarget.value)}
          placeholder='Report Title...'
          variant='filled'
          radius='lg'
          size='lg'
        />

        <SegmentedControl
          value={value}
          onChange={setValue}
          mt={20}
          size='md'
          radius={"md"}
          color='cyan'
          data={[
            { label: "Bug", value: "bug" },
            { label: "Player", value: "player" },
            { label: "Other", value: "other" },
          ]}></SegmentedControl>
      </Box>
      <Button
        mt={10}
        variant='light'
        color='cyan'
        radius='md'
        size='lg'
        uppercase
        onClick={(e) => handleSubmit(e)}>
        create report
      </Button>
    </>
  );
}

export default ReportTab;
