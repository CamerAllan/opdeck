import { CSSProperties } from "react";

const BODY_FONT_SIZE = 32;
const HEADER_FONT_SIZE = 36;

// Colours
export const BROWN = "#623633";
export const BEIGE1 = "#D4BFA4";
export const BEIGE2 = "#C19A6B";
export const BEIGE3 = "#AD8E79";

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
