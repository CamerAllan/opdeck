import { CSSProperties } from "react";
import * as css from "./basicStyles";

const PILLAR_BAR_HEIGHT = 80;

export const pillars = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap"
} as CSSProperties;

export const pillar = {
  flex: "1 0"
} as CSSProperties;

export const raisePillar = {
  ...pillar,
  color: css.DARK3,
} as CSSProperties;

export const lowerPillar = {
  ...pillar,
  color: css.ACCENT
} as CSSProperties;

export const pillarBarOutline = (backgroundColor: string) => {
  return {
    backgroundColor,
    borderStyle: "solid",
    height: PILLAR_BAR_HEIGHT,
    margin: "auto",
    width: "20%"
  } as CSSProperties;
}

export const pillarBarFill = (percentageFill: number) => {
  return {
    backgroundColor: css.DARK1,
    height: `${100 - percentageFill}%`
  } as CSSProperties;
};
