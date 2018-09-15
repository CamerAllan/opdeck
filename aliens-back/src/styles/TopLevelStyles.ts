import { style } from "typestyle";

export const top = style({
  display: "flex",
  flexDirection: "row"
});

export const leftMargin = style({ flex: "1 1" });

export const rightMargin = style({ flex: "1 1" });

export const middle = style({
  display: "flex",
  flex: "2 0",
  flexDirection: "column",
  minHeight: "100vh"
});

export const body = style({ flex: "1" });

export const header = style({});

export const footer = style({});
