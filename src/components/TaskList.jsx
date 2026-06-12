import { Task } from "./Task";

export function TaskList({ tasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            description={task.description}
            completed={task.completed}
            created={task.created}
          />
        </li>
      ))}
    </ul>
  );
}
