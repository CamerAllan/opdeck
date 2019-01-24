import { CSSProperties } from "react";

export const card = {
  background: "#12939A",
  borderRadius: "10px",
  padding: "10px 10px 10px 10px",
  height: "100%",
  width: "100%",
  position: "relative"
} as CSSProperties;

export const contextContainer = {
  position: "relative",
  height: "50%",
  overflow: "hidden"
} as CSSProperties;

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

export const choiceContainer = {
  borderRadius: "5px",
  background: "rgba(0,0,0,0.1)",
  height: "50%"
} as CSSProperties;

export const choice = {
  textAlign: "center",
  padding: "3px",
  overflow: "hidden",
  height: "50%"
} as CSSProperties;
