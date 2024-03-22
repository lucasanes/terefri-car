import { ScrollShadow } from "@nextui-org/react";
import { styled } from "../../../stitches.config";

export const Container = styled(ScrollShadow, {
  width: "100%",
  height: "calc(100% - 64px)",
  position: "fixed",
  overflow: "auto",
});

export const Body = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "column",

  ".span": {
    width: "100%",
    fontSize: "20px",
    textAlign: "center",
    margin: "60px 0",
    padding: "0 30px",
  },

  hr: {
    border: "1px solid $pallet",
  },
});

export const Cards = styled("div", {
  width: "100%",
  display: "flex",
  flexWrap: "wrap",
  gap: "100px 50px",
  alignItems: "flex-start",
  justifyContent: "space-between",
  padding: "60px 160px",

  "@xlg": {
    padding: "60px 60px",
  },

  "@lg": {
    justifyContent: "center",
  },
});

export const DivMap = styled("div", {
  width: "100%",
  padding: "60px 160px",

  ".map": {
    width: "100%",
    height: "40vw",
    borderRadius: "15px",
    overflow: "hidden",
  },

  "@xlg": {
    padding: "60px 60px",

    ".map": {
      height: "50vw",
    },
  },

  "@sm": {
    padding: "60px 20px",
  },
});
