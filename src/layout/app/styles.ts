import { Button } from "@nextui-org/react";
import { styled } from "../../../stitches.config";

export const Container = styled("body", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const ContentWrapper = styled("main", {
  width: "100%",
  height: "calc(100% - 60px)",
});

export const Menu = styled("nav", {
  width: "100%",
  minHeight: "60px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "$content",
  padding: "0 160px",
});

export const Buttons = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",
});

export const Button1 = styled(Button, {
  fontSize: "20px",
  color: "$hiContrast",
  textTransform: "uppercase",
  transition: ".3s",

  variants: {
    acitve: {
      true: {
        textShadow: "0 0 6px #FAFF00, 0 0 3px #FAFF00 ",
      },
    },
  },
});
