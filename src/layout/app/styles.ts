import { Button, Navbar, NavbarContent } from "@nextui-org/react";
import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const ContentWrapper = styled("main", {
  width: "100%",
  height: "100%",
});

export const Nav = styled(Navbar, {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "$content",
  padding: "0 160px",

  header: {
    minWidth: "100%",
    padding: 0,
  },

  "@xlg": {
    padding: "0 60px",
  },

  "@sm": {
    padding: "0 20px",
  },
});

export const Buttons = styled(NavbarContent, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "60px",

  ".toggle": {
    display: "none",
  },

  "@lg": {
    gap: "20px",
  },

  "@md": {
    ".toggle": {
      display: "flex",
    },
    ".item": {
      display: "none",
    },
  },
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
