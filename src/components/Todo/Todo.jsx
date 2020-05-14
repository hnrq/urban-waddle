import React, { useState } from "react";
import type { Todo as TodoModel } from "models/Todo";
import classNames from "classnames";
import { formatDistanceToNow } from "date-fns";
import { Edit, X, Check } from "react-feather";
import "./Todo.scss";

type Props = {
  /** Function to be called when the todo is clicked */
  handleClick: (any) => any,
  /** Function to be called when the todo is edited */
  handleEdit: (any) => any,
  /** CSS classes */
  classList: string | Array<string>,
  ...TodoModel,
};

const Todo = ({
  handleClick,
  title,
  creationDate,
  done,
  handleEdit,
}: Props) => {
  const [editMode, setEditMode] = useState(false);
  const [value, setValue] = useState(title);
  return (
    <div
      className={classNames("todo d-flex align-items-center", { done })}
      onClick={handleClick}
      tabIndex="0"
    >
      {!editMode && <input type="checkbox" className="mx-3" checked={done} />}
      <div className="d-flex flex-column">
        {editMode ? (
          <input
            value={value}
            className="form-control"
            type="text"
            onChange={(e) => setValue(e.target.value)}
          />
        ) : (
          <h3 className="title">{title}</h3>
        )}
        <span className="creation-date">
          Created {formatDistanceToNow(creationDate)} ago
        </span>
      </div>
      {editMode ? (
        <div className="edit-actions ml-auto d-flex">
          <button className="btn btn-link" onClick={() => setEditMode(false)}>
            <X />
          </button>
          <button
            className="btn btn-link"
            onClick={() => {
              setEditMode(false);
              handleEdit(value);
            }}
          >
            <Check />
          </button>
        </div>
      ) : (
        <button
          className="btn btn-link ml-auto"
          onClick={() => {
            setValue(title);
            setEditMode(true);
          }}
        >
          <Edit />
        </button>
      )}
    </div>
  );
};

Todo.defaultProps = {
  creationDate: new Date(),
  done: false,
  dueTo: new Date(),
};

export default Todo;
