import { TasksFilter } from "./TasksFilter";
import PropTypes from "prop-types";

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

Footer.propTypes = {
  activeTasksCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  setFilter: PropTypes.func.isRequired,
  clearCompleted: PropTypes.func.isRequired,
};

Footer.defaultProps = {
  activeTasksCount: 0,
};
