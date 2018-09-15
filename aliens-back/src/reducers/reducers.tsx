import { combineReducers } from "redux";
import * as types from "../actions/actionTypes";

// Move this
export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

function visibilityFilter(state = VisibilityFilters.SHOW_ALL, action: any) {
  switch (action.type) {
    case types.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}
function todos(state = [], action: any) {
  switch (action.type) {
    case types.ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ];
    case types.TOGGLE_TODO:
      // Improve typing
      return state.map((todo: any, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}
const app = combineReducers({
  visibilityFilter,
  todos
});
export default app;
