import { styled } from "../../../../../stitches.config";

export const Container = styled("div", {
  width: "250px",
  display: "flex",
  flexDirection: "column",
  gap: "25px",

  ".header": {
    display: "flex",
    flexDirection: "column",
    gap: "10px",

    h1: {
      fontSize: "18px",
      color: "$pallet",
    },
  },

  ".infos": {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    fontSize: "16px",

    ".p": {
      height: "48px",
    },
  },
});
