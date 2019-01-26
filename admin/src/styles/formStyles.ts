import * as css from "./basicStyles";
import { CSSProperties } from "react";
import * as adminCSS from "./adminStyles";

export const formElement = {
  ...css.bodyFont
};

export const textElement = {
  ...formElement,
  padding: "8px 8px",
  margin: "8px 0",
  boxSizing: "border-box",
  border: "2px solid grey",
  borderRadius: "5px"
} as CSSProperties;

export const textAreaElement = {
  ...textElement,
  width: "100%"
} as CSSProperties;

export const formButton = {
  ...formElement,
  ...adminCSS.adminButton
} as CSSProperties;

const formGroupContainer = {
  display: "flex",
  padding: "5px 5px 5px 5px"
};

export const horFormGroupContainer = {
  ...formGroupContainer,
  flexFlow: "row wrap"
};

export const vertFormGroupContainer = {
  ...formGroupContainer,
  flexFlow: "column",
  width: "100%"
};

export const formGroupElement = {
  ...formElement,
  flex: "1 0 auto",
  padding: "5px 5px 5px 5px"
};

export const formLabel = {
  display: "block"
};
