import { TasksFilter } from "./TasksFilter";

export function Footer() {
  return (
    <footer>
      <span class="todo-count">1 items left</span>
      <TasksFilter />
      <button class="clear-completed">Clear completed</button>
    </footer>
  );
}
