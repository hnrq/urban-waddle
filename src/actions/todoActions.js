import * as types from "types/todo";
import type { Todo } from "models/Todo";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";

export const createTodoAction = (todo: Todo) => (dispatch) => {
  toast.success("Todo successfully created.");
  dispatch(createTodoSuccess(todo));
};

export const createTodoSuccess = (todo: Todo) => ({
  type: types.CREATE_TODO_SUCCESS,
  payload: todo,
});

export const createTodoFailure = (error: AxiosError) => ({
  type: types.CREATE_TODO_FAILURE,
  error,
});

export const createTodoRequest = () => ({ type: types.CREATE_TODO_REQUEST });

export const updateTodoAction = (todo: Todo) => (dispatch) => {
  toast.success("Todo successfully updated.");
  dispatch(updateTodoSuccess(todo));
};

export const updateTodoSuccess = (todo: Todo) => ({
  type: types.UPDATE_TODO_SUCCESS,
  payload: todo,
});

export const updateTodoFailure = (error: AxiosError) => ({
  type: types.UPDATE_TODO_FAILURE,
  error,
});

export const updateTodoRequest = () => ({ type: types.UPDATE_TODO_REQUEST });

export const deleteTodoAction = (id: string) => (dispatch) => {
  toast.success("Todo successfully deleted.");
  dispatch(deleteTodoSuccess(id));
};

export const deleteTodoSuccess = (id: string) => ({
  type: types.DELETE_TODO_SUCCESS,
  payload: id,
});

export const deleteTodoFailure = (error: AxiosError) => ({
  type: types.DELETE_TODO_FAILURE,
  error,
});

export const deleteTodoRequest = () => ({ type: types.DELETE_TODO_REQUEST });

export const fetchTodosAction = (todos: Array<Todo>) => (dispatch) => {
  dispatch(fetchTodosSuccess(todos));
};

export const fetchTodosSuccess = (todos: Array<Todo>) => ({
  type: types.FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodoFailure = (error: AxiosError) => ({
  type: types.FETCH_TODOS_FAILURE,
  error,
});

export const fetchTodosRequest = () => ({ type: types.FETCH_TODOS_REQUEST });

export const doTodoRequest = () => ({ type: types.DO_TODO_REQUEST });

export const doTodoAction = (id: string) => (dispatch) => {
  dispatch(doTodoSuccess(id));
};

export const doTodoSuccess = (id: string) => ({
  type: types.DO_TODO_SUCCESS,
  payload: id,
});

export const doTodoFailure = (error) => ({
  type: types.DO_TODO_FAILURE,
  error,
});

export const undoTodoRequest = () => ({ type: types.UNDO_TODO_REQUEST });

export const undoTodoAction = (id: string) => (dispatch) => {
  dispatch(undoTodoSuccess(id));
};

export const undoTodoSuccess = (id: string) => ({
  type: types.UNDO_TODO_SUCCESS,
  payload: id,
});

export const undoTodoFailure = (error) => ({
  type: types.UNDO_TODO_FAILURE,
  error,
});
