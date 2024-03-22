import { Image } from "@nextui-org/react";
import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "350px",
  borderRadius: "15px",
  background: "$content",
  display: "flex",
  flexDirection: "column",
  boxShadow: "0 0 15px #000",
  overflow: "hidden",
  "@sm": {
    width: "300px",
  },
});

export const Img = styled(Image, {
  width: "350px",
  height: "190px",
  transition: "1s",
});

export const Img2 = styled(Image, {
  width: "170px",
  height: "105px",
  transition: "1s",
});

export const Body = styled("div", {
  width: "100%",
  borderTop: "2px solid $border",
  borderBottom: "2px solid $border",
  display: "flex",
  justifyContent: "space-between",
});

export const Infos = styled("div", {
  padding: "45px 20px",

  h1: {
    fontSize: "24px",
    fontWeight: "700",
  },

  h2: {
    fontSize: "18px",
    marginBottom: "30px",
  },

  span: {
    fontSize: "20px",
  },

  ".price": {
    fontWeight: "600",
    color: "$pallet",
  },
});

export const Images = styled("div", {
  height: "100%",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  borderLeft: "2px solid $border",

  ".img": {
    borderBottom: "2px solid $border",
  },

  div: {
    height: "100%",
  },

  img: {
    height: "100%",
  },
});
