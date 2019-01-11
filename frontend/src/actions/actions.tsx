import { Action } from "redux";
import { ThunkDispatch } from 'redux-thunk';
import * as types from "./actionTypes";
import * as R from "../store/requestTypes";
import { HoverLoc, IStore } from "../store/store";


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
  return async (dispatch: ThunkDispatch<IStore, void, Action>) => {
    dispatch(startGameStarted);

    const req = { userId: "NO_USER_ID" };
    for (const key of userData.entries()) {
      req.userId = key[1];
    }

    fetch(`/addGame/${req.userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
    }).then((response) =>
      response.json().then(data => {
        const id: number = data ? data.newGameId : 999
        dispatch(startGameSuccess(id));
      }).catch((reason) => {
        dispatch(startGameFailure(reason));
      }));
  }
}

const startGameSuccess = (gameId: number) => ({
  type: types.START_GAME_SUCCESS,
  payload: {
    gameId
  }
});

const startGameStarted = () => ({
  type: types.START_GAME_STARTED
});

const startGameFailure = (error: any) => ({
  type: types.START_GAME_FAILURE,
  payload: {
    error
  }
});

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
