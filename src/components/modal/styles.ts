import { ModalBody, ModalHeader } from "@nextui-org/react";
import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "100%",
  display: "flex",

  button: {
    width: "100%",
    fontSize: "16px",
    color: "$pallet",
  },
});

export const Header = styled(ModalHeader, {
  display: "flex",
  flexDirection: "column",

  h1: {
    fontSize: "22px",
    color: "$pallet",
    fontWeight: 600,
    letterSpacing: "1px",
  },

  h2: {
    fontSize: "16px",
  },

  b: {
    fontWeight: 400,
    color: "$pallet",
  },
});

export const Body = styled(ModalBody, {
  display: "flex",
  flexDirection: "column",
});

export const Infos = styled("div", {
  display: "grid",
  gridTemplateColumns: "2fr 1fr",

  p: {
    padding: "0 2rem",
  },

  b: {
    color: "$pallet",
  },
});

export const Images = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  padding: "20px 0",
  gap: "30px",

  img: {
    transition: "1s",
  },
});
