import { Global } from "@mantine/core";
import rubik from "../assets/Rubik-Regular.ttf";

export function CustomFonts() {
  return (
    <Global
      styles={[
        {
          "@font-face": {
            fontFamily: "Rubik",
            src: `url('${rubik}') format("ttf")`,
            fontWeight: 400,
            fontStyle: "normal",
          },
        },
      ]}
    />
  );
}
