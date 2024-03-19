import ReactDOM from "react-dom/client";
import { Routers } from "./routes";
import { GlobalStyles } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <Routers />
    <GlobalStyles />
  </>
);
