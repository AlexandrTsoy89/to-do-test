import { Task } from "./Task";

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
