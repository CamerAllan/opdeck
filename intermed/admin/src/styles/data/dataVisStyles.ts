import { CSSProperties } from "react";
import * as commonVis from "../commonVisStyles";
import * as css from "../basicStyles";

export const visContainer = {
  ...commonVis.visContainer
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
