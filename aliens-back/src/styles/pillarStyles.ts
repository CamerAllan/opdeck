import { CSSProperties } from "react";
// import * as css from "./basicStyles";

export const pillars = {
  display: "flex",
  flexDirection: "row"
} as CSSProperties;

export const pillar = {
  flex: "1 0"
} as CSSProperties;

export const raisePillar = {
  ...pillar,
  color: "green"
} as CSSProperties;

export const lowerPillar = {
  ...pillar,
  color: "red"
} as CSSProperties;
