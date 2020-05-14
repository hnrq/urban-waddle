import { produce } from "immer";
import * as types from "types/todo";
import Todo from "models/Todo";
import todos from "__mocks__/todos";

const initialState: { todos: Array<Todo>, loading: boolean } = {
  todos,
  loading: false,
};

export default (state = initialState, action = {}) =>
  produce(state, (draft) => {
    const { payload } = action;
    switch (action.type) {
      case types.CREATE_TODO_SUCCESS: {
        draft.todos[payload.id] = payload;
        break;
      }
      case types.UPDATE_TODO_SUCCESS: {
        draft.todos[payload.id] = payload;
        break;
      }
      case types.DELETE_TODO_SUCCESS: {
        delete draft.todos[payload];
        break;
      }
      case types.FETCH_TODOS_REQUEST: {
        draft.loading = true;
        break;
      }
      case types.FETCH_TODOS_SUCCESS: {
        draft.todos = payload;
        break;
      }
      case types.DO_TODO_SUCCESS: {
        draft.todos[payload].done = true;
        break;
      }
      case types.UNDO_TODO_SUCCESS: {
        draft.todos[payload].done = false;
        break;
      }
      default:
        break;
    }
    return draft;
  });
