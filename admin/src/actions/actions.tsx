// import * as R from "../store/requestTypes";
import * as types from "./actionTypes";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { IStore, IWeightings, IGame, ICard, IPillar } from "src/store/store";

export function getAllData() {
  return async (dispatch: ThunkDispatch<IStore, void, Action>) => {
    dispatch(getAllDataStarted);
    const response = await fetch(`/all`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    response
      .json()
      .then(data => {
        dispatch(getAllDataSuccess(data));
      })
      .catch(reason => {
        dispatch(getAllDataFailure(reason));
      });
  };
}

const getAllDataSuccess = (data: any) => ({
  type: types.GET_ALL_DATA_SUCCESS,
  payload: {
    data
  }
});

const getAllDataStarted = () => ({
  type: types.GET_ALL_DATA_STARTED
});

const getAllDataFailure = (error: any) => ({
  type: types.GET_ALL_DATA_FAILED,
  payload: {
    error
  }
});

export function getGameData(gameName: string) {
  return async (dispatch: ThunkDispatch<IStore, void, Action>) => {
    dispatch(getGameDataStarted);
    const response = await fetch(`/game/${gameName}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    response
      .json()
      .then(game => {
        dispatch(getGameDataSuccess(game));
      })
      .catch(reason => {
        dispatch(getGameDataFailure(reason));
      });
  };
}

const getGameDataSuccess = (game: IGame) => ({
  type: types.GET_GAME_DATA_SUCCESS,
  payload: {
    game
  }
});

const getGameDataStarted = () => ({
  type: types.GET_GAME_DATA_STARTED
});

const getGameDataFailure = (error: any) => ({
  type: types.GET_GAME_DATA_FAILED,
  payload: {
    error
  }
});

export const selectCards = (cardIds: string[]) => ({
  type: types.SELECT_CARDS,
  payload: {
    cardIds
  }
});

export const filterPillars = (filter: IWeightings) => ({
  type: types.FILTER_PILLARS,
  payload: {
    filter
  }
});

export const closeMenu = () => ({
  type: types.CLOSE_MENU
});

export const openAddCardMenu = () => ({
  type: types.OPEN_ADD_CARD_MENU
});

export const openAddPillarMenu = () => ({
  type: types.OPEN_ADD_PILLAR_MENU
});
export const addCard = (id: string, card: ICard) => ({
  type: types.ADD_CARD,
  payload: {
    id,
    card
  }
});
export const addPillar = (id: string, pillar: IPillar) => ({
  type: types.ADD_PILLAR,
  payload: {
    id,
    pillar
  }
});
export const saveGame = (id: string, game: IGame) => {
  fetch(`/game/${id}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(game)
  });
  return {
    type: types.SAVE_GAME,
    payload: {
      id
    }
  };
};
export const deleteCard = (id: string) => {
  return {
    type: types.DELETE_CARD,
    payload: id
  };
};
export const deletePillar = (id: string) => {
  return {
    type: types.DELETE_PILLAR,
    payload: id
  };
};
export const selectPillar = (id: string) => {
  return {
    type: types.SELECT_PILLAR,
    payload: id
  };
};
export const selectCard = (id: string) => {
  return {
    type: types.SELECT_CARD,
    payload: id
  };
};
