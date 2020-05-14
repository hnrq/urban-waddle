import * as actions from "./todoActions";
import * as types from "types/todo";
import todos from "__mocks__/todos";

describe("todoActions test section", () => {
  describe("synchronous actions test section", () => {
    it("should dispatch an action when a todo is successfully created", () => {
      // prepare
      const expectedAction = {
        type: types.CREATE_TODO_SUCCESS,
        payload: todos[1],
      };
      // execution
      expect(actions.createTodoSuccess(todos[1])).toEqual(expectedAction);
    });

    it("should dispatch an action when failing to create a todo", () => {
      // prepare
      const expectedAction = {
        type: types.CREATE_TODO_FAILURE,
        error: "error",
      };
      // execution
      expect(actions.createTodoFailure("error")).toEqual(expectedAction);
    });

    it("should dispatch an action when a request to create a todo is sent", () => {
      // prepare
      const expectedAction = { type: types.CREATE_TODO_REQUEST };
      // execution
      expect(actions.createTodoRequest()).toEqual(expectedAction);
    });

    it("should dispatch an action when a todo is successfully updated", () => {
      // prepare
      const expectedAction = {
        type: types.UPDATE_TODO_SUCCESS,
        payload: todos[1],
      };
      // execution
      expect(actions.updateTodoSuccess(todos[1])).toEqual(expectedAction);
    });

    it("should dispatch an action when failing to update a todo", () => {
      // prepare
      const expectedAction = {
        type: types.UPDATE_TODO_FAILURE,
        error: "Error",
      };
      // execution
      expect(actions.updateTodoFailure("Error")).toEqual(expectedAction);
    });

    it("should dispatch an action when a request to update a todo is sent", () => {
      // prepare
      const expectedAction = { type: types.UPDATE_TODO_REQUEST };
      // execution
      expect(actions.updateTodoRequest()).toEqual(expectedAction);
    });

    it("should dispatch an action when a todo is successfully deleted", () => {
      // prepare
      const expectedAction = {
        type: types.DELETE_TODO_SUCCESS,
        payload: 1,
      };
      // execution
      expect(actions.deleteTodoSuccess(1)).toEqual(expectedAction);
    });

    it("should dispatch an action when when failing to delete a todo", () => {
      // prepare
      const expectedAction = {
        type: types.DELETE_TODO_FAILURE,
        error: "error",
      };
      // execution
      expect(actions.deleteTodoFailure("error")).toEqual(expectedAction);
    });

    it("should dispatch an action when a request to delete a todo is sent", () => {
      // prepare
      const expectedAction = { type: types.DELETE_TODO_REQUEST };
      // execution
      expect(actions.deleteTodoRequest()).toEqual(expectedAction);
    });

    it("should dispatch an action when the todos are successfully fetched", () => {
      // prepare
      const expectedAction = {
        type: types.FETCH_TODOS_SUCCESS,
        payload: todos,
      };
      // execution
      expect(actions.fetchTodosSuccess(todos)).toEqual(expectedAction);
    });

    it("should dispatch an action when failing to fetch todos", () => {
      // prepare
      const expectedAction = {
        type: types.FETCH_TODOS_FAILURE,
        error: "error",
      };
      // execution
      expect(actions.fetchTodoFailure("error")).toEqual(expectedAction);
    });

    it("should dispatch an action when a request to fetch the todos is sent", () => {
      // prepare
      const expectedAction = { type: types.FETCH_TODOS_REQUEST };
      // execution
      expect(actions.fetchTodosRequest()).toEqual(expectedAction);
    });

    it("should dispatch an action when sending a request to do a todo", () => {
      // prepare
      const expectedAction = { type: types.DO_TODO_REQUEST };
      // execution
      expect(actions.doTodoRequest()).toEqual(expectedAction);
    });

    it("should dispatch an action when a todo is successfully done", () => {
      // prepare
      const expectedAction = { type: types.DO_TODO_SUCCESS, payload: 1 };
      // execution
      expect(actions.doTodoSuccess(1)).toEqual(expectedAction);
    });

    it("should dispatch an action when failing to do a todo", () => {
      // prepare
      const expectedAction = { type: types.DO_TODO_FAILURE, error: "error" };
      // execution
      expect(actions.doTodoFailure("error")).toEqual(expectedAction);
    });

    it("should dispatch an action when", () => {
      // prepare
      const expectedAction = { type: types.UNDO_TODO_REQUEST };
      // execution
      expect(actions.undoTodoRequest()).toEqual(expectedAction);
    });

    it("should dispatch an action when", () => {
      // prepare
      const expectedAction = { type: types.UNDO_TODO_SUCCESS, payload: 1 };
      // execution
      expect(actions.undoTodoSuccess(1)).toEqual(expectedAction);
    });

    it("should dispatch an action when", () => {
      // prepare
      const expectedAction = { type: types.UNDO_TODO_FAILURE, error: "error" };
      // execution
      expect(actions.undoTodoFailure("error")).toEqual(expectedAction);
    });
  });
});
