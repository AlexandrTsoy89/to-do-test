import { Task } from "./Task";
import PropTypes from "prop-types";

export function TaskList({
  tasks,
  deleteTask,
  toggleTask,
  startEditing,
  saveTask,
}) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li
          key={task.id}
          className={`
    ${task.completed ? "completed" : ""}
    ${task.editing ? "editing" : ""}
  `}
        >
          <Task
            id={task.id}
            description={task.description}
            completed={task.completed}
            created={task.created}
            editing={task.editing}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            startEditing={startEditing}
            saveTask={saveTask}
          />
        </li>
      ))}
    </ul>
  );
}

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      editing: PropTypes.bool.isRequired,
      created: PropTypes.instanceOf(Date).isRequired,
    }),
  ).isRequired,

  deleteTask: PropTypes.func.isRequired,
  toggleTask: PropTypes.func.isRequired,
  startEditing: PropTypes.func.isRequired,
  saveTask: PropTypes.func.isRequired,
};
