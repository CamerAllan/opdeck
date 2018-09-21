import * as types from "./actionTypes";

// Game control
export function startGame() {
  return { type: types.START_GAME };
}

// Game
export function drawCard() {
  return { type: types.DRAW_CARD };
}

// export function addCardToPlay(cardId: string) {
//   return { type: types.ADD_CARD_TO_PLAY, cardId };
// }

// export function addCardToReserve(cardId: string) {
//   return { type: types.ADD_CARD_TO_RESERVE, cardId };
// }

// export function removeCardFromPlay(cardId: string) {
//   return { type: types.REMOVE_CARD_FROM_PLAY, cardId };
// }

// export function removeCardFromReserve(cardId: string) {
//   return { type: types.REMOVE_CARD_FROM_RESERVE, cardId };
// }

export function choose(cardId: string, choice: boolean) {
  return { type: types.CHOOSE, cardId, choice };
}

// User
export function updateUserField(field: string, value: string | number) {
  const payload = { field, value };
  return { type: types.UPDATE_USER_FIELD, payload };
}
