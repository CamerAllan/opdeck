import * as types from "./actionTypes";

export function addTodo(text: string) {
  return { type: types.ADD_TODO, text };
}
export function toggleTodo(index: number) {
  return { type: types.TOGGLE_TODO, index };
}
export function setVisibilityFilter(filter: string) {
  return { type: types.SET_VISIBILITY_FILTER, filter };
}
