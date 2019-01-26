import { CSSProperties } from "react";
import * as css from "./basicStyles";

export const adminArea = {
  flex: "1 0"
} as CSSProperties;

export const adminTopLevel = {
  display: "flex",
  flexFlow: "row wrap",
  height: "100vh",
  width: "100%"
};

export const adminButton = {
  border: "none",
  borderRadius: "5px",
  color: "white",
  background: "#12939A",
  display: "inline",
  margin: "5px",
  height: "50px",
  width: "70px"
} as CSSProperties;

export const adminLeftCont = {
  ...adminArea,
  display: "flex",
  flexFlow: "column",
  background: "#cccccc",
  maxHeight: "100vh",
  minHeight: "100vh"
} as CSSProperties;

export const adminVisCont = {
  ...adminArea,
  background: "white",
  display: "flex",
  flex: "3 1",
  maxHeight: "100vh",
  maxWidth: "100%",
  minWidth: "400px"
} as CSSProperties;

export const adminAreaHeader = {
  ...css.headerFont,
  width: "100%",
  borderTop: "2px solid #cccccc",
  padding: "5px",
  fontWeight: "bold"
} as CSSProperties;
