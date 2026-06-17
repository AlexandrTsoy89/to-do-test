import { useState } from "react";

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
          <span className="created">{created.toLocaleDateString()}</span>
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
          if (e.key === "Enter") {
            saveTask(id, editValue);
          }
        }}
      />
    </>
  );
}
