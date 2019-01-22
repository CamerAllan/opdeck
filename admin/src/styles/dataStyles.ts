import { CSSProperties } from "react";
import * as css from "./basicStyles"

export const dataTopLevel = {
  display: "flex",
  flexFlow: "row wrap"
};

export const dataSelectCont = {
  flex: "1 0",
  margin: css.LARGE_PADDING
} as CSSProperties;

export const dataVisCont = {
  flex: "3 0"
} as CSSProperties;
