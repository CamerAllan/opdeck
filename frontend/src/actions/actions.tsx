import { Action } from "redux";
import { ThunkDispatch } from "redux-thunk";
import * as types from "./actionTypes";
import * as R from "../store/requestTypes";
import { HoverLoc, IStore, IGame, IUserData } from "../store/store";

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
export function startGame(userData: IUserData, gameName: string) {
  return async (dispatch: ThunkDispatch<IStore, void, Action>) => {
    dispatch(startGameStarted);

    fetch(`/addGame/user/${userData.userId}/game/${gameName}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(response =>
      response
        .json()
        .then(data => {
          const id: number = data ? data.newGameId : 999;
          const gameDef: IGame = data ? data.newGameDef : "err";
          dispatch(startGameSuccess(id, gameDef));
        })
        .catch(reason => {
          dispatch(startGameFailure(reason));
        })
    );
  };
}

const startGameSuccess = (gameId: number, game: IGame) => ({
  type: types.START_GAME_SUCCESS,
  payload: {
    gameId,
    game
  }
});

const startGameStarted = () => ({
  type: types.START_GAME_STARTED
});

const startGameFailure = (error: any) => {
  return {
    type: types.START_GAME_FAILURE,
    payload: {
      error
    }
  };
};

// User
export function addUser(userData: IUserData) {
  const payload = { userId: "NO_USER_ID" };

  payload.userId = userData.userId ? userData.userId : "Bad user ID";

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
