import { CSSProperties } from "react";
import * as css from "./basicStyles";

const PILLAR_BAR_HEIGHT = 80;

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

export const pillarBarOutline = {
  backgroundColor: "black",
  borderStyle: "solid",
  height: PILLAR_BAR_HEIGHT,
  margin: "auto",
  width: "20%"
} as CSSProperties;

export const pillarBarFill = (percentageFill: number) => {
  return {
    backgroundColor: css.BEIGE1,
    height: `${percentageFill}%`
  } as CSSProperties;
};
