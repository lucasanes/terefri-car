import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { TiPhoneOutline } from "react-icons/ti";
import { GoogleMap } from "../../components/map";
import { Card } from "./component/card";
import * as S from "./styles";

export function Contato() {
  return (
    <S.Container>
      <S.Body>
        <span className="span">Como você prefere falar conosco?</span>
        <hr />
        <S.Cards>
          <Card
            title="Presencial"
            desc="Basta comparecer á nossa loja."
            response="Rodovia Dr. Rogério Moura Estevão Nº 188 Loja 7, Prata (KM 1 Est. Terê X Friburgo)"
          >
            <FaWhatsapp size={30} />
          </Card>

          <Card
            title="Telefone"
            desc="Você pode chamar a qualquer hora!"
            response="+55 21 99953-6787"
          >
            <TiPhoneOutline
              style={{ transform: " scaleX(-1)", marginLeft: "-5px" }}
              size={30}
            />
          </Card>

          <Card
            title="Instagram"
            desc="Fique por dentro das novidades!"
            response="terefri.car"
          >
            <FaInstagram size={30} />
          </Card>

          <Card
            title="E-mail"
            desc="Tem alguma dúvida?"
            response="edu.anes@hotmail.com"
          >
            <MdOutlineEmail size={30} />
          </Card>
        </S.Cards>
        <hr />
        <S.DivMap>
          <GoogleMap />
        </S.DivMap>
      </S.Body>
    </S.Container>
  );
}
