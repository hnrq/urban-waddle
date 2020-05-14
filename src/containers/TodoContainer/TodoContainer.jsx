import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { Todo } from "components/Todo";
import { Link } from "react-router-dom";
import "./TodoContainer.scss";
import {
  updateTodoAction,
  deleteTodoAction,
  undoTodoAction,
  doTodoAction,
} from "actions/todoActions";

const TodoContainer = () => {
  const { todos } = useSelector(({ todoReducer }) => todoReducer);
  const dispatch = useDispatch();
  return (
    <div className="todo-container pt-0 container rounded shadow h-100">
      <div className="row todo-header sticky py-3 bg-white shadow">
        <h2 className="col-8">To-do List</h2>
        <div className="ml-auto col-4 d-flex">
          <Link to="/new-todo" className="btn btn-success ml-auto">
            New To-do
          </Link>
        </div>
      </div>
      <div className="row todos-list shadow-inset overflow-auto pb-4">
        <div className="col">
          <AnimatePresence>
            {Object.entries(todos).map(([key, todo]) => (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                key={key}
                positionTransition
                exit={{ opacity: 0 }}
              >
                <Todo
                  key={key}
                  handleEdit={(title, dueTo) =>
                    dispatch(updateTodoAction({ ...todo, title, dueTo }))
                  }
                  handleDelete={(e) => {
                    e.stopPropagation();
                    dispatch(deleteTodoAction(key));
                  }}
                  handleClick={() =>
                    dispatch(
                      todo.done ? undoTodoAction(key) : doTodoAction(key)
                    )
                  }
                  {...todo}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
