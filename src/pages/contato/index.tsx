import { useRef } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { GoogleMap } from "../../components/map";
import { Card } from "./component/card";
import * as S from "./styles";

export function Contato() {
  const scrollRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  };

  return (
    <S.Container size={100}>
      <S.Body>
        <span className="span">Como você prefere falar conosco?</span>
        <hr />
        <S.Cards>
          <Card
            func={scrollToBottom}
            title="Presencial"
            desc="Basta comparecer á nossa loja."
            response="Rodovia Dr. Rogério Moura Estevão Nº 188 Loja 7, Prata (KM 1 Est. Terê X Friburgo)"
          >
            <HiOutlineUserGroup color="#dbdbdb" size={30} />
          </Card>

          <Card
            func={() =>
              window.open(
                "https://api.whatsapp.com/send?phone=+5521999536787&text=Olá, vim do seu site.",
                "_blank"
              )
            }
            title="Telefone"
            desc="Você pode chamar a qualquer hora!"
            response="+55 21 99953-6787"
          >
            <FaWhatsapp color="#dbdbdb" size={30} />
          </Card>

          <Card
            func={() =>
              window.open("https://www.instagram.com/terefri.car", "_blank")
            }
            title="Instagram"
            desc="Fique por dentro das novidades!"
            response="terefri.car"
          >
            <FaInstagram color="#dbdbdb" size={30} />
          </Card>

          <Card
            func={() =>
              window.open(
                "mailto:edu.anes@hotmail.com?subject=Vim do seu site.&body=Olá, Eduardo!",
                "_blank"
              )
            }
            title="E-mail"
            desc="Tem alguma dúvida? Manda aí pra gente!"
            response="edu.anes@hotmail.com"
          >
            <MdOutlineEmail color="#dbdbdb" size={30} />
          </Card>
        </S.Cards>
        <hr />
        <S.DivMap ref={scrollRef}>
          <GoogleMap />
        </S.DivMap>
      </S.Body>
    </S.Container>
  );
}
