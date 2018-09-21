import { CSSProperties } from "react";

export const top = {
  display: "flex",
  flexDirection: "row"
} as CSSProperties;

export const leftMargin = { flex: "1 1" } as CSSProperties;

export const rightMargin = { flex: "1 1" } as CSSProperties;

export const middle = {
  display: "flex",
  flex: "3 0",
  flexDirection: "column",
  minHeight: "100vh"
} as CSSProperties;

export const body = { flex: "1" } as CSSProperties;

export const header = {} as CSSProperties;

export const footer = {} as CSSProperties;
