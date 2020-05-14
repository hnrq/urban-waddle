import React from "react";
import TodoContainer from "./TodoContainer";
import { render, fireEvent } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import todos from "__mocks__/todos";
import { Provider } from "react-redux";

const store = mockStore({ todosReducer: { magposts: todos } });

describe("TodoContainer test section", () => {
  it("should render one Todo component for each todo provided", () => {
    // prepare
    render(
      <Provider store={store}>
        <TodoContainer />
      </Provider>
    );
    // execution
    expect(document.getElementsByClassName("todo").length).toBe(6);
  });
});
