import { CSSProperties } from "react";
import * as css from "./basicStyles"

export const adminTopLevel = {
  display: "flex",
  flexFlow: "row wrap"
};

export const adminSelectCont = {
  flex: "1 0",
  margin: css.LARGE_PADDING
} as CSSProperties;

export const adminVisCont = {
  background: "white",
  flex: "3 0"
} as CSSProperties;
