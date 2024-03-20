import { NextUIProvider } from "@nextui-org/react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routers } from "./routes";
import { GlobalStyles } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <Routers />
    <GlobalStyles />
  </NextUIProvider>
);
