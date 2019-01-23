import { CSSProperties } from "react";
import * as css from "./basicStyles"

export const visContainer = {
  display: "flex",
  flexFlow: "row wrap",
  height: "100%",
  width: "100%",
  overflow: "auto",
  overflowX: "hidden",
  maxHeight: "100vh",
  maxWidth: "100%"
} as CSSProperties;

export const vis = {
  flex: "1 1 400px",
  margin: css.LARGE_PADDING,
  minWidth: "400px",
  maxWidth: "700px"
} as CSSProperties;

export const title = {
  ...css.headerFontCentered
} as CSSProperties;

export const desc = {
  ...css.bodyFont
} as CSSProperties;
