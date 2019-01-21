import { CSSProperties } from "react";

export const visContainer = {
  display: "flex",
  flexFlow: "row wrap",
  height: "100%",
  width: "100%",
  overflow: "auto",
  overflowX: "hidden",
  maxHeight: "100vh",
  maxWidth: "100%"
} as CSSProperties;

export const vis = {
  flex: "1 1 400px",
  minWidth: "400px"
} as CSSProperties;
