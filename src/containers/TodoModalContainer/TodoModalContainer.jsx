import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createTodoAction } from "actions/todoActions";
import DatePicker from "react-datepicker";
import ReactModal from "react-modal";

import "./TodoModalContainer.scss";

const TodoModalContainer = () => {
  const [title, setTitle] = useState("");
  const [dueTo, setDueTo] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const createTodo = () => {
    if (title.trim().length > 0 && dueTo) {
      dispatch(createTodoAction(title, dueTo));
      history.goBack();
    }
  };

  return (
    <ReactModal
      isOpen={true}
      contentLabel="onRequestClose Example"
      onRequestClose={() => history.goBack()}
      className="modal-dialog"
      style={{
        overlay: { backgroundColor: "rgba(0, 0, 0, 0.4)" },
      }}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            New to-do
          </h5>
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            onClick={() => history.goBack()}
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="form-group">
              <label htmlFor="todo-title">Title:</label>
              <input
                type="text"
                className="form-control"
                id="todo-title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Ex.: Take the trash out"
              />
            </div>
            <div className="form-group">
              <label className="d-block" htmlFor="todo-due-to">
                Due to
              </label>
              <DatePicker
                id="todo-due-to"
                className="form-control"
                selected={dueTo}
                onChange={setDueTo}
              />
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
            onClick={() => history.goBack()}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={createTodo}
          >
            Create to-do
          </button>
        </div>
      </div>
    </ReactModal>
  );
};

export default TodoModalContainer;
