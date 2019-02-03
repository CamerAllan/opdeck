import { CSSProperties } from "react";

const BODY_FONT_SIZE = 32;
const HEADER_FONT_SIZE = 36;

// Colours
export const ACCENT = "#C14953";
export const LIGHT = "#EEEEEE";
export const DARK3 = "#848FA5";
export const DARK2 = "#4C4C47";
export const DARK1 = "#2D2D2A";

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
