import { Outlet, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo.png";
import * as S from "./styles";

export function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.Menu>
        <img width={105} height={45} src={logo} alt="logo" />

        <S.Buttons>
          <S.Button1
            onClick={() => navigate("/")}
            acitve={location.pathname == "/"}
            variant={"light"}
            to={"/"}
          >
            Início
          </S.Button1>
          <S.Button1
            onClick={() => navigate("/sobre")}
            acitve={location.pathname == "/sobre"}
            variant={"light"}
            to={"/sobre"}
          >
            Sobre Nós
          </S.Button1>
          <S.Button1
            onClick={() => navigate("/contato")}
            acitve={location.pathname == "/contato"}
            variant={"light"}
            to={"/contato"}
          >
            Contato
          </S.Button1>
        </S.Buttons>
      </S.Menu>

      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
    </S.Container>
  );
}
