import { CSSProperties } from "react";

const GAME_FONT_SIZE = 32;
const HEADER_FONT_SIZE = 36;
const MENU_FONT_SIZE = 16;

// Colours
export const ACCENT = "#C14953";
export const LIGHT = "#EEEEEE";
export const DARK3 = "#848FA5";
export const DARK2 = "#4C4C47";
export const DARK1 = "#2D2D2A";

export const gameFont = {
  fontFamily: "Open Sans, sans-serif",
  fontSize: GAME_FONT_SIZE
} as CSSProperties;

export const gameFontCentered = {
  ...gameFont,
  textAlign: "center"
} as CSSProperties;

export const headerFontCentered = {
  ...gameFontCentered,
  fontSize: HEADER_FONT_SIZE
} as CSSProperties;

export const menuFont = {
  ...gameFontCentered,
  fontSize: MENU_FONT_SIZE
} as CSSProperties;
