import { Outlet } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import * as S from "./styles";

export function AppLayout() {
  return (
    <S.Container>
      <S.Menu>
        <img width={105} height={45} src={logo} alt="logo" />

        <S.Buttons>
          <S.Button to={"/"}>Início</S.Button>
          <S.Button to={"/sobre"}>Sobre Nós</S.Button>
          <S.Button to={"/contato"}>Contato</S.Button>
        </S.Buttons>
      </S.Menu>

      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Container>
  );
}
