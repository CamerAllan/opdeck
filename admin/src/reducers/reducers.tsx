import { Reducer } from "redux";
import * as types from "../actions/actionTypes";

import defaultStore from "../store/defaultStore";
import { IStore } from "../store/store";

function mainReducer(state = defaultStore, action: any): IStore {
  switch (action.type) {
    case types.GET_ALL_DATA_SUCCESS: {
      return {
        ...state,
        data: action.payload.data
      };
    }
    case types.GET_GAME_DATA_SUCCESS: {
      return {
        ...state,
        game: action.payload.game
      };
    }
    case types.SELECT_CARD: {
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          cards: action.payload.cardIds
        }
      };
    }
    case types.FILTER_PILLARS: {
      const pillarName = Object.keys(action.payload.filter)[0];
      return {
        ...state,
        selectedData: {
          ...state.selectedData,
          filter: {
            ...state.selectedData.filter,
            [pillarName]: {
              ...state.selectedData.filter[pillarName],
              ...action.payload.filter[pillarName]
            }
          }
        }
      }
    }
    default:
      return { ...state };
  }
}

const app: Reducer<IStore> = mainReducer;
export default app;
