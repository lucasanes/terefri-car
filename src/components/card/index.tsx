import { CarType } from "../../types/car";
import { ModalInfos } from "../modal";
import * as S from "./styles";

export function Card({ car }: { car: CarType }) {
  return (
    <S.Container>
      <S.Img radius={"none"} isZoomed src={car.imgs[0]} />
      <S.Body>
        <S.Infos>
          <h1>{car.marca}</h1>
          <h2>{car.modelo}</h2>

          <span>{car.ano}</span>
          <br />
          <span className="price">
            {car.preco.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </S.Infos>
        <S.Images>
          <S.Img2 className="img" radius={"none"} isZoomed src={car.imgs[1]} />
          <S.Img2 radius={"none"} isZoomed src={car.imgs[2]} />
        </S.Images>
      </S.Body>
      <ModalInfos car={car} />
    </S.Container>
  );
}
