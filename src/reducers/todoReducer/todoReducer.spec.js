import todoReducer from './todoReducer';
import * as types from 'types/todo';
import todos from '__mocks__/todos';

describe('todoReducer test section', () => {
  it('should return initialState', () => {
    // execution
    expect(todoReducer(undefined, {})).toEqual({
      todos: {},
      loading: false
    });
  });
  it('should handle CREATE_TODO_SUCCESS', () => {
    // execution
    expect(todoReducer(undefined, { type: types.CREATE_TODO_SUCCESS, payload: todos[1] })).toEqual({
      todos: { 1: todos[1] },
      loading: false
    });
  });
  it('should handle UPDATE_TODO_SUCCESS', () => {
    // execution
    expect(todoReducer(
      {
        todos: { ...todos, 1: { title: 'test'} },
        loading: false
      }, { type: types.UPDATE_TODO_SUCCESS, payload: { ...todos[1], title: 'update' } })).toEqual({
      todos: { ...todos, 1: { ...todos[1], title: 'update' }},
      loading: false
    });
  });
  it('should handle DELETE_TODO_SUCCESS', () => {
    expect(todoReducer(
      {
        todos,
        loading: false
      }, { type: types.DELETE_TODO_SUCCESS, payload: 1 })).toEqual({
      todos: { ...todos, 1: undefined},
      loading: false
    });
  });
  it('should handle FETCH_TODOS_REQUEST', () => {
    // execution
    expect(todoReducer({ todos: {} }, { type: types.FETCH_TODOS_REQUEST})).toEqual({
      todos: {},
      loading: true
    });
  });
  it('should handle FETCH_TODOS_SUCCESS', () => {
   // execution
    expect(todoReducer(undefined, { type: types.FETCH_TODOS_SUCCESS, payload: todos })).toEqual({
      todos,
      loading: false
    }); 
  });
});