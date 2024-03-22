import { Button, Select } from "@nextui-org/react";
import ReactPullToRefresh from "react-pull-to-refresh";
import { styled } from "../../../stitches.config";

export const Container = styled(ReactPullToRefresh, {
  width: "100vw",
  height: "calc(100% - 64px)",
  position: "fixed",
  overflow: "hidden auto",
});

export const Search = styled("div", {
  width: "fit-content",
  padding: "40px 0",
  marginLeft: "160px",
  display: "flex",
  gap: "40px",
  alignItems: "center",

  "@xlg": {
    marginLeft: "60px",
    gap: "20px",
  },

  "@lg": {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },

  "@sm": {
    marginLeft: 0,
    width: "100%",
    gridTemplateColumns: "1fr",
    justifyItems: "center",
  },
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
  fontSize: "16px",
  boxShadow: "0 0 15px #000",
});

export const Body = styled("div", {
  width: "100%",
  display: "grid",
  justifyContent: "center",
  padding: "0px 60px 40px 60px",
  gridTemplateColumns: "repeat(auto-fit, minmax(350px, 350px))",
  gridGap: "40px",

  "@sm": {
    padding: "0px 20px 40px 20px",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 300px))",
  },
});
