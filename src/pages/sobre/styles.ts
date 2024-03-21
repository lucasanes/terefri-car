import { ScrollShadow } from "@nextui-org/react";
import { styled } from "../../../stitches.config";

export const Container = styled(ScrollShadow, {
  width: "100vw",
  height: "calc(100% - 64px)",
  position: "fixed",
  overflow: "auto",
});

export const Body = styled("div", {
  width: "100%",
  fontSize: "18px",
  padding: "40px 160px",

  "@xlg": {
    padding: "40px 60px",
  },

  "@sm": {
    padding: "40px 20px",

    ".tabs div": {
      flexDirection: "column",
    },
  },
});

export const Text = styled("p", {
  fontSize: "18px",
});
