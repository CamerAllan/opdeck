import * as R from "../store/requestTypes";
import { HoverLoc } from "../store/store";
import * as types from "./actionTypes";

// Page
export function login(value: string) {
  return { type: types.LOGIN, value };
}

// Game control
export function startGame() {
  return { type: types.START_GAME };
}

// Game
export function drawCard() {
  return { type: types.DRAW_CARD };
}

export function choose(choice: R.IChooseRequest) {
  fetch("/choose", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(choice)
  });
  return { type: types.CHOOSE, cardId: choice.cardId, choice: choice.answer };
}

// User
export function updateUserField(field: string, value: string | number) {
  const payload = { field, value };
  return { type: types.UPDATE_USER_FIELD, payload };
}

// Interface
export function updateDecisionHover(value: HoverLoc) {
  return { type: types.UPDATE_DECISION_HOVER, value };
}
