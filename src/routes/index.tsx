import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "../layout/app";
import { Contato } from "../pages/contato";
import { Home } from "../pages/home";
import { Sobre } from "../pages/sobre";

export function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
