import { Select } from "@nextui-org/react";
import { styled } from "../../stitches.config";

export const Container = styled("div", {
  width: "100vw",
  height: "100vh",
});

export const Search = styled("div", {
  width: "100%",
  padding: "4rem 16rem",
  display: "flex",
  gap: "4rem",
  alignItems: "center",
  fontSize: "2rem",
});

export const Filter = styled(Select, {});
