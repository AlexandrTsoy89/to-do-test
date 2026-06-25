import { useState } from "react";
import { formatDistanceToNow } from "date-fns";
import PropTypes from "prop-types";

export function Task({
  id,
  description,
  completed,
  created,
  deleteTask,
  toggleTask,
  editing,
  startEditing,
  saveTask,
}) {
  const [editValue, setEditValue] = useState(description);

  return (
    <>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={() => toggleTask(id)}
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">
            created {formatDistanceToNow(created, { addSuffix: true })}
          </span>
        </label>
        <button
          className="icon icon-edit"
          onClick={() => startEditing(id)}
        ></button>
        <button
          className="icon icon-destroy"
          onClick={() => deleteTask(id)}
        ></button>
      </div>
      <input
        type="text"
        className="edit"
        value={editValue}
        autoFocus
        onChange={(e) => setEditValue(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && editValue.trim()) {
            saveTask(id, editValue.trim());
          }
          if (e.key === "Escape") {
            setEditValue(description);
          }
        }}
      />
    </>
  );
}

Task.propTypes = {
  id: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  created: PropTypes.instanceOf(Date).isRequired,
  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  editing: PropTypes.bool.isRequired,
  startEditing: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
};

Task.defaultProps = {
  editing: false,
};
