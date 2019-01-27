import { CSSProperties } from "react";
import * as css from "../basicStyles";

export const visContainer = {
  overflowY: "scroll",
  display: "flex",
  flexFlow: "column"
} as CSSProperties;

export const cardVis = {
  display: "flex",
  flexFlow: "row wrap",
  padding: "30px",
  alignItems: "center"
} as CSSProperties;

export const cardContainer = {
  flex: "1 1 175px",
  height: "275px",
  margin: "15px",
  maxWidth: "225px",
  minWidth: "175px",
  transition: "0.5s ease-out"
};

export const pillarVis = {
  display: "flex",
  flexFlow: "row wrap",
  padding: "30px",
  alignItems: "center"
} as CSSProperties;

export const pillarContainer = {
  flex: "1 1 175px",
  height: "250px",
  margin: "15px",
  maxWidth: "225px",
  minWidth: "150px",
  transition: "0.5s ease-out"
};

export const formCont = {
  flex: "1 1",
  overflowY: "scroll",
  padding: css.LARGE_PADDING
} as CSSProperties;

export const previewCont = {
  borderTopLeftRadius: "10px",
  borderTopRightRadius: "10px",
  display: "flex",
  flexFlow: "row",
  flex: "0 0 300px",
  padding: css.LARGE_PADDING,
  background: "grey",
  height: "300px",
  width: "100%",
  bottom: 0,
  left: 0
} as CSSProperties;

export const preview = {
  height: "225px",
  width: "150px"
};
