import { useNuiEvent } from "./hooks/useNuiEvent";
import { fetchNui } from "./utils/fetchNui";
import { theme } from "./theme";
import { MantineProvider } from "@mantine/core";
import { useConfig } from "./providers/ConfigProvider";
import ContainerComp from "./components/MainComp";
import { CustomFonts } from "./theme/CustomFonts";
import { Notifications } from "@mantine/notifications";

const App: React.FC = () => {
  const { config } = useConfig();

  return (
    <MantineProvider
      withNormalizeCSS
      withGlobalStyles
      theme={{ ...theme, ...config }}>
      <Notifications
        position='top-right'
        zIndex={2077}
      />
      <CustomFonts />
      <ContainerComp></ContainerComp>
    </MantineProvider>
  );
};

export default App;
