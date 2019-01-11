// import * as R from "../store/requestTypes";
import * as types from "./actionTypes";
import { ThunkDispatch } from "redux-thunk";
import { Action } from "redux";
import { IStore } from "src/store/store";

export function getAllData() {
    return async (dispatch: ThunkDispatch<IStore, void, Action>) => {
        dispatch(getAllDataStarted);
        fetch(`/all`, {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
        }).then((response) => {
            response.json().then(data => {
                dispatch(getAllDataSuccess(data));
            }).catch((reason) => {
                dispatch(getAllDataFailure(reason));
            })
        });
    }
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
