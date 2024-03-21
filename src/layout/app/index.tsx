import {
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import * as S from "./styles";
import { useState } from "react";

export function AppLayout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const location = useLocation();
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Nav isMenuOpen={isMenuOpen}>
        <NavbarContent>
          <NavbarBrand>
            <img width={105} height={45} src={logo} alt="logo" />
          </NavbarBrand>
        </NavbarContent>

        <S.Buttons>
          <NavbarItem className="item">
            <S.Button1
              onClick={() => navigate("/")}
              acitve={location.pathname == "/"}
              variant={"light"}
              to={"/"}
            >
              Início
            </S.Button1>
          </NavbarItem>
          <NavbarItem className="item">
            <S.Button1
              onClick={() => navigate("/sobre")}
              acitve={location.pathname == "/sobre"}
              variant={"light"}
              to={"/sobre"}
            >
              Sobre Nós
            </S.Button1>
          </NavbarItem>
          <NavbarItem className="item">
            <S.Button1
              onClick={() => navigate("/contato")}
              acitve={location.pathname == "/contato"}
              variant={"light"}
              to={"/contato"}
            >
              Contato
            </S.Button1>
          </NavbarItem>

          <NavbarContent justify="end" className="toggle">
            <NavbarMenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </NavbarContent>
        </S.Buttons>

        <NavbarMenu>
          <NavbarMenuItem>
            <S.Button1
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/");
              }}
              acitve={location.pathname == "/"}
              variant={"light"}
              to={"/"}
            >
              Início
            </S.Button1>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <S.Button1
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/sobre");
              }}
              acitve={location.pathname == "/sobre"}
              variant={"light"}
              to={"/sobre"}
            >
              Sobre Nós
            </S.Button1>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <S.Button1
              onClick={() => {
                setIsMenuOpen(false);
                navigate("/contato");
              }}
              acitve={location.pathname == "/contato"}
              variant={"light"}
              to={"/contato"}
            >
              Contato
            </S.Button1>
          </NavbarMenuItem>
        </NavbarMenu>
      </S.Nav>

      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Container>
  );
}
