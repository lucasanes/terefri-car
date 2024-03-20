import { Button, Select } from "@nextui-org/react";
import { styled } from "../../../stitches.config";

export const Container = styled("div", {
  width: "100vw",
  height: "100%",
});

export const Search = styled("div", {
  width: "100%",
  padding: "4rem 0",
  marginLeft: "10rem",
  display: "flex",
  gap: "4rem",
  alignItems: "center",
  fontSize: "2rem",
});

export const Filter = styled(Select, {
  width: 210,
  height: 55,
});

export const ButtonSearch = styled(Button, {
  width: 190,
  height: 55,
  background: "$content",
  borderRadius: "100px",
  color: "$pallet",
  fontWeight: 500,
  letterSpacing: 1,
  fontSize: "1rem",
});
