import { Image, Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useState } from "react";
import { CarType } from "../../types/car";
import { ModalInfos } from "../modal";
import * as S from "./styles";

export function Card({ car }: { car: CarType }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [imgSelected, setImgSelected] = useState("");

  return (
    <S.Container>
      <Modal
        backdrop="blur"
        size="5xl"
        placement="center"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent>
          {(onClose) => (
            <Image onClick={onClose} radius={"none"} src={imgSelected} />
          )}
        </ModalContent>
      </Modal>

      <S.Img
        onClick={() => {
          setImgSelected(car.imgs[0]);
          onOpen();
        }}
        radius={"none"}
        isZoomed
        src={car.imgs[0]}
      />
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
          <S.Img2
            onClick={() => {
              setImgSelected(car.imgs[6]);
              onOpen();
            }}
            className="img"
            radius={"none"}
            isZoomed
            src={car.imgs[1]}
          />
          <S.Img2
            onClick={() => {
              setImgSelected(car.imgs[3]);
              onOpen();
            }}
            radius={"none"}
            isZoomed
            src={car.imgs[2]}
          />
        </S.Images>
      </S.Body>
      <ModalInfos car={car} />
    </S.Container>
  );
}
