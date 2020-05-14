import * as types from "types/todo";
import type { Todo } from "models/Todo";
import type { AxiosError, AxiosResponse } from "axios";

export const createTodoSuccess = (todo: Todo) => ({
  type: types.CREATE_TODO_SUCCESS,
  payload: todo,
});

export const createTodoFailure = (error: AxiosError) => ({
  type: types.CREATE_TODO_FAILURE,
  error,
});

export const createTodoRequest = () => ({ type: types.CREATE_TODO_REQUEST });

export const updateTodoSuccess = (todo: Todo) => ({
  type: types.UPDATE_TODO_SUCCESS,
  payload: todo,
});

export const updateTodoFailure = (error: AxiosError) => ({
  type: types.UPDATE_TODO_FAILURE,
  error,
});

export const updateTodoRequest = () => ({ type: types.UPDATE_TODO_REQUEST });

export const deleteTodoSuccess = (id: string) => ({
  type: types.DELETE_TODO_SUCCESS,
  payload: id,
});

export const deleteTodoFailure = (error: AxiosError) => ({
  type: types.DELETE_TODO_FAILURE,
  error,
});

export const deleteTodoRequest = () => ({ type: types.DELETE_TODO_REQUEST });

export const fetchTodosSuccess = (todos: Array<Todo>) => ({
  type: types.FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodoFailure = (error: AxiosError) => ({
  type: types.FETCH_TODOS_FAILURE,
  error,
});

export const fetchTodosRequest = () => ({ type: types.FETCH_TODOS_REQUEST });
