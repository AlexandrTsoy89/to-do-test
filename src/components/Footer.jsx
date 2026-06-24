import { TasksFilter } from "./TasksFilter";

export function Footer({
  activeTasksCount,
  filter,
  setFilter,
  clearCompleted,
}) {
  return (
    <footer className="footer">
      <span className="todo-count">{activeTasksCount} items left</span>

      <TasksFilter filter={filter} setFilter={setFilter} />

      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
