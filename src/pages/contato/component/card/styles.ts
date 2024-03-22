import { styled } from "../../../../../stitches.config";

export const Container = styled("div", {
  width: "250px",
  display: "flex",
  flexDirection: "column",
  gap: "25px",

  button: {
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: "10px",
    fontSize: "18px",
    color: "$pallet",
    padding: ".5rem 1rem",
    marginLeft: "-1rem",
  },

  ".header": {
    h1: {},
  },

  ".infos": {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    fontSize: "16px",
  },
});
