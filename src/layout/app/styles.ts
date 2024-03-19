import { Link } from "react-router-dom";
import { styled } from "../../stitches.config";

export const Container = styled("body", {
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
});

export const ContentWrapper = styled("main", {
  width: "100%",
  height: "100%",
});

export const Menu = styled("nav", {
  width: "100%",
  minHeight: "6rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "$content",
  padding: "0 16rem",
});

export const Buttons = styled("div", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6rem",
});

export const Button = styled(Link, {
  background: "none",
  border: "none",
  fontFamily: "Poppins",
  fontSize: "20px",
  color: "$hiContrast",
  textTransform: "uppercase",
  textDecoration: "none",
});
