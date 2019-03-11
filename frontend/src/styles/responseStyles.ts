import { CSSProperties } from "react";
import * as css from "./basicStyles";

export const responses = {
  display: "flex",
  flexDirection: "column",
} as CSSProperties;

export const response = {
  ...css.gameFont,
  background: "none",
  border: 0,
  flex: "1 0",
  textAlign: "left"
} as CSSProperties;
