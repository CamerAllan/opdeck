import * as css from "./basicStyles";

export const formElement = {
  ...css.bodyFont
};

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
