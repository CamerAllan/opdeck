import { CSSProperties } from "react";

const BODY_FONT_SIZE = 32;
const HEADER_FONT_SIZE = 36;

// Colours
export const SILVER = "#CCCCCC";
export const GREY = "#555555";

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
