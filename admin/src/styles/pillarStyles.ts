import { CSSProperties } from "react";

export const pillar = (colour: string) => {
  return {
    background: `${colour === "" ? "#DDDDDD" : colour}`,
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
    borderRadius: "10px",
    padding: "10px 10px 10px 10px",
    height: "100%",
    width: "100%",
    position: "relative"
  } as CSSProperties;
};

export const textFade = {
  backgroundImage:
    "linear-gradient(rgba(18, 147, 154,0), rgba(18, 147, 154,1))",
  position: "absolute",
  bottom: 0,
  left: 0,
  height: "15px",
  width: "100%"
} as CSSProperties;

export const id = {
  fontSize: "9px",
  textAlign: "right"
} as CSSProperties;

export const title = {
  fontWeight: "bold",
  textAlign: "center"
} as CSSProperties;

export const description = {
  fontStyle: "italic"
} as CSSProperties;
