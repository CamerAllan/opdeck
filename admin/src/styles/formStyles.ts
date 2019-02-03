import * as css from "./basicStyles";
import { CSSProperties } from "react";
import * as adminCSS from "./adminStyles";

export const formElement = {
  ...css.bodyFont
} as CSSProperties;

export const textElement = {
  ...formElement,
  padding: "8px 8px",
  margin: "8px 0",
  boxSizing: "border-box",
  border: "2px solid grey",
  borderRadius: "5px"
} as CSSProperties;

export const textAreaElement = {
  ...textElement
} as CSSProperties;

export const formButton = {
  ...formElement,
  ...adminCSS.adminButton,
  display: "inline"
} as CSSProperties;

const formGroupContainer = {
  display: "flex",
  padding: "5px 5px 5px 5px",
  width: "100%"
} as CSSProperties;

export const horFormGroupContainer = {
  ...formGroupContainer,
  flexFlow: "row wrap"
} as CSSProperties;

export const vertFormGroupContainer = {
  ...formGroupContainer,
  flexFlow: "column",
  width: "100%"
};

export const formGroupElement = {
  ...formElement,
  flex: "1 0 auto",
  padding: "5px 5px 5px 5px"
} as CSSProperties;

export const formLabel = {
  display: "block"
};

export const formCont = {
  flex: "1 1",
  overflowY: "scroll",
  overflowX: "hidden",
  padding: css.LARGE_PADDING
} as CSSProperties;
