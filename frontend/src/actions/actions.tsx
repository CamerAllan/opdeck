import * as R from "../store/requestTypes";
import { HoverLoc } from "../store/store";
import * as types from "./actionTypes";

// Game
export function drawCard() {
  return { type: types.DRAW_CARD };
}

export function takeTurn(choice: R.ITurnRequest) {
  fetch("/addTurn", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ ...choice })
  });
  return { type: types.CHOOSE, cardId: choice.cardId, choice: choice.answer };
}

// Game control
export function startGame(userData: any) {
  const payload = { userId: "NO_USER_ID", gameId: "NO_GAME_ID" };
  for (const key of userData.entries()) {
    payload.userId = key[1];
    payload.gameId = key[1] + "game";
  }

  fetch("/addGame", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return { type: types.START_GAME };
}

// User
export function addUser(userData: any) {
  const payload = { userId: "NO_USER_ID" };
  for (const key of userData.entries()) {
    payload.userId = key[1];
  }

  fetch("/addUser", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
  return { type: types.ADD_USER, payload };
}

// Interface
export function updateDecisionHover(value: HoverLoc) {
  return { type: types.UPDATE_DECISION_HOVER, value };
}
