import { HoverLoc } from "../store/store";
import * as types from "./actionTypes";

// Game control
export function startGame() {
  return { type: types.START_GAME };
}

// Game
export function drawCard() {
  return { type: types.DRAW_CARD };
}

export function choose(cardId: string, choice: boolean) {
  const toSend = { cardId, choice };
  fetch("/choose", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(toSend)
  });
  return { type: types.CHOOSE, cardId, choice };
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
