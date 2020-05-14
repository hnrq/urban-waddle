import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Todo } from "components/Todo";
import "./TodoContainer.scss";

const TodoContainer = () => {
  const { todos } = useSelector(({ todoReducer }) => todoReducer);
  console.log(todos);
  return (
    <div className="todo-container container">
      {Object.entries(todos).map(([key, todo]) => (
        <Todo key={key} {...todo} />
      ))}
    </div>
  );
};

export default TodoContainer;
