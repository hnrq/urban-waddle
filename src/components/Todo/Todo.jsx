import React, { useState } from "react";
import type { Todo as TodoModel } from "models/Todo";
import DatePicker from "react-datepicker";
import classNames from "classnames";
import { formatDistanceToNow, format } from "date-fns";
import { Edit, X, Check, Trash } from "react-feather";
import "./Todo.scss";

type Props = {
  /** Function to be called when the todo is clicked */
  handleClick: (any) => any,
  /** Function to be called when the todo is edited */
  handleEdit: (any) => any,
  /** Function to be called when the todo is deleted */
  handleDelete: (any) => any,
  /** CSS classes */
  classList: string | Array<string>,
  ...TodoModel,
};

const Todo = ({
  handleClick,
  title,
  creationDate,
  dueTo,
  done,
  handleEdit,
  handleDelete,
}: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [titleValue, setTitleValue] = useState(title);
  const [dueToValue, setDueToValue] = useState(dueTo);
  return (
    <div
      className={classNames("todo row align-items-center", { done })}
      onClick={handleClick}
      tabIndex="0"
    >
      <div className="col-1">
        {!editMode && (
          <input
            type="checkbox"
            className="mx-3"
            checked={done}
            onChange={() => {}}
          />
        )}
      </div>
      <div className="col-8 flex-column">
        <small className="creation-date text-muted">
          Created {formatDistanceToNow(creationDate)} ago
        </small>
        {editMode ? (
          <input
            value={titleValue}
            className="form-control mb-1"
            type="text"
            onChange={(e) => setTitleValue(e.target.value)}
          />
        ) : (
          <h3 className="title">{title}</h3>
        )}
        {editMode ? (
          <DatePicker
            selected={dueToValue}
            className="form-control"
            onChange={setDueToValue}
          />
        ) : (
          <small className="due-to mt-2 text-muted">
            Due to {format(dueTo, "dd/MM/yyyy")}
          </small>
        )}
      </div>
      <div className="col-3 d-flex" onClick={(e) => e.stopPropagation()}>
        {editMode ? (
          <>
            <button
              className="btn btn-link btn-cancel mx-auto"
              onClick={() => {
                setEditMode(false);
                setTitleValue(title);
                setDueToValue(dueTo);
              }}
            >
              <X />
            </button>
            <button
              className="btn btn-link btn-save"
              onClick={() => {
                setEditMode(false);
                handleEdit(titleValue, dueToValue);
              }}
            >
              <Check />
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-link btn-delete" onClick={handleDelete}>
              <Trash />
            </button>
            <button
              className="btn btn-link ml-auto"
              onClick={() => setEditMode(true)}
            >
              <Edit />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

Todo.defaultProps = {
  creationDate: new Date(),
  done: false,
  dueTo: new Date(),
};

export default Todo;
