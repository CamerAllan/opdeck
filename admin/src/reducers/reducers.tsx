import { Reducer } from "redux";
import * as types from "../actions/actionTypes";

import defaultStore from "../store/defaultStore";
import { IStore } from "../store/store";

function mainReducer(state = defaultStore, action: any): IStore {

    switch (action.type) {
        case types.GET_ALL_DATA_SUCCESS: {
            return {
                ...state,
                data: action.payload.data,
            }
        }
        case types.SELECT_CARD: {
            return {
                ...state,
                selectedData: {
                    ...state.selectedData,
                    cards: [
                        ...state.selectedData.cards,
                        action.payload.cardId
                    ]
                }
            }
        }
        case types.DESELECT_CARD: {
            return {
                ...state,
                selectedData: {
                    ...state.selectedData,
                    cards: [
                        ...state.selectedData.cards.filter(item => item !== action.payload.cardId),
                    ]
                }
            }
        }
        default: return { ...state }
    }
}

const app: Reducer<IStore> = mainReducer;
export default app;
