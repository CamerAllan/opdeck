import { CSSProperties } from "react";
// import * as css from "../basicStyles"

export const visContainer = {
  overflowY: "scroll",
  display: "flex",
  flexFlow: "column"
} as CSSProperties;

export const cardVis = {
  display: "flex",
  flexFlow: "row wrap",
  padding: "30px",
  alignItems: "center"
} as CSSProperties;

export const cardContainer = {
  flex: "1 1 175px",
  height: "250px",
  margin: "15px",
  maxWidth: "225px",
  minWidth: "150px",
  transition: "0.5s ease-out"
};

export const pillarVis = {
  display: "flex",
  flexFlow: "row wrap",
  padding: "30px",
  alignItems: "center"
} as CSSProperties;

export const pillarContainer = {
  flex: "1 1 175px",
  height: "250px",
  margin: "15px",
  maxWidth: "225px",
  minWidth: "150px",
  transition: "0.5s ease-out"
};
