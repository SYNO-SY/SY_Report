import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ConfigProvider from "./providers/ConfigProvider";
import { isEnvBrowser } from "./utils/misc";
import { VisibilityProvider } from "./providers/VisibilityProvider";
import { debugData } from "./utils/debugData";
import { CustomFonts } from "./theme/CustomFonts";

debugData([
  {
    action: "setVisible",
    data: "show-ui",
  },
]);

if (isEnvBrowser()) {
  const root = document.getElementById("root");

  // https://i.imgur.com/iPTAdYV.png - Night time img
  root!.style.backgroundImage = 'url("https://i.imgur.com/3pzRj9n.png")';
  root!.style.backgroundSize = "cover";
  root!.style.backgroundRepeat = "no-repeat";
  root!.style.backgroundPosition = "center";
}

const root = document.getElementById("root");
ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <ConfigProvider>
      <VisibilityProvider>
        <CustomFonts />
        <App />
      </VisibilityProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
