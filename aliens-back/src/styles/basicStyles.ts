import { CSSProperties } from "react";

const BODY_FONT_SIZE = 20;
const HEADER_FONT_SIZE = 36;

export const bodyFont = {
  fontFamily: "Open Sans, sans-serif",
  fontSize: BODY_FONT_SIZE
} as CSSProperties;

export const bodyFontCentered = {
  ...bodyFont,
  textAlign: "center"
} as CSSProperties;

export const headerFontCentered = {
  ...bodyFontCentered,
  fontSize: HEADER_FONT_SIZE
} as CSSProperties;
