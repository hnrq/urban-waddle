import * as types from "types/todo";
import type { Todo } from "models/Todo";
import type { AxiosError } from "axios";
import { toast } from "react-toastify";
import firebase from "firebaseConfig";

export const createTodoAction = (title: String, dueTo: Date) => async (
  dispatch
) => {
  dispatch(createTodoRequest());
  try {
    const todo = {
      title,
      dueTo: dueTo,
      creationDate: new Date(),
      done: false,
    };
    const todoRef = await firebase.db.collection("todos").add(todo);
    dispatch(createTodoSuccess({ ...todo, id: todoRef.id }));
    toast.success("Todo successfully created.");
  } catch (error) {
    toast.error("Error when creating to-do.");
    dispatch(createTodoFailure(error));
  }
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

export const updateTodoAction = (todo: Todo) => async (dispatch) => {
  dispatch(updateTodoRequest());
  try {
    await firebase.db
      .collection("todos")
      .doc(todo.id)
      .update({ title: todo.title, dueTo: todo.dueTo });
    dispatch(updateTodoSuccess(todo));
    toast.success("Todo successfully updated.");
  } catch (error) {
    toast.error("Error when updating to-do.");
    console.log(error);
    dispatch(updateTodoFailure(error));
  }
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

export const deleteTodoAction = (id: string) => async (dispatch) => {
  dispatch(deleteTodoRequest());
  try {
    await firebase.db.collection("todos").doc(id).delete();
    toast.success("Todo successfully deleted.");
    dispatch(deleteTodoSuccess(id));
  } catch (error) {
    toast.error("Error when deleting todo.");
  }
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

export const fetchTodosAction = (todos: Array<Todo>) => async (dispatch) => {
  dispatch(fetchTodosRequest());
  try {
    const queryResult = {};
    const querySnapshot = await firebase.db.collection("todos").get();
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      queryResult[doc.id] = {
        ...data,
        id: doc.id,
        dueTo: data.dueTo.toDate(),
        creationDate: data.creationDate.toDate(),
      };
    });
    dispatch(fetchTodosSuccess(queryResult));
  } catch (error) {
    toast.error("Error when fetching todos");
    console.log(error);
    dispatch(fetchTodoFailure(error));
  }
};

export const fetchTodosSuccess = (todos: Map<string, Todo>) => ({
  type: types.FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodoFailure = (error: AxiosError) => ({
  type: types.FETCH_TODOS_FAILURE,
  error,
});

export const fetchTodosRequest = () => ({ type: types.FETCH_TODOS_REQUEST });

export const doTodoRequest = () => ({ type: types.DO_TODO_REQUEST });

export const doTodoAction = (id: string) => async (dispatch) => {
  dispatch(doTodoRequest(id));
  try {
    await firebase.db.collection("todos").doc(id).update({ done: true });
    dispatch(doTodoSuccess(id));
  } catch (error) {
    toast.error("Error when doing to-do.");
    dispatch(doTodoFailure(error));
  }
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

export const undoTodoAction = (id: string) => async (dispatch) => {
  dispatch(undoTodoRequest(id));
  try {
    await firebase.db.collection("todos").doc(id).update({ done: true });
    dispatch(undoTodoSuccess(id));
  } catch (error) {
    toast.error("Error when undoing to-do.");
    dispatch(undoTodoFailure(error));
  }
};

export const undoTodoSuccess = (id: string) => ({
  type: types.UNDO_TODO_SUCCESS,
  payload: id,
});

export const undoTodoFailure = (error) => ({
  type: types.UNDO_TODO_FAILURE,
  error,
});
