import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";

function App() {
  const [taskList, setTaskList] = useState([
    {
      id: 1,
      description: "Completed task",
      completed: true,
      editing: false,
      created: new Date(),
    },
    {
      id: 2,
      description: "Editing task",
      completed: false,
      editing: false,
      created: new Date(),
    },
    {
      id: 3,
      description: "Active task",
      completed: false,
      editing: false,
      created: new Date(),
    },
  ]);

  const [filter, setFilter] = useState("all");

  function handleDeleteTask(id) {
    setTaskList((tasks) => tasks.filter((task) => task.id !== id));
  }

  function toggleTask(id) {
    setTaskList((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  }

  function startEditing(id) {
    setTaskList((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, editing: true } : task)),
    );
  }

  function saveTask(id, newDescription) {
    setTaskList((tasks) =>
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              description: newDescription,
              editing: false,
            }
          : task,
      ),
    );
  }

  function addTask(description) {
    const newTask = {
      id: Date.now(),
      description,
      completed: false,
      editing: false,
      created: new Date(),
    };

    setTaskList((tasks) => [...tasks, newTask]);
  }

  function clearCompleted() {
    setTaskList((tasks) => tasks.filter((task) => !task.completed));
  }

  const filteredTasks = taskList.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  const activeTasksCount = taskList.filter((task) => !task.completed).length;

  return (
    <>
      <section className="todoapp">
        <NewTaskForm addTask={addTask} />
        <section className="main">
          <TaskList
            tasks={filteredTasks}
            deleteTask={handleDeleteTask}
            toggleTask={toggleTask}
            startEditing={startEditing}
            saveTask={saveTask}
          />

          <Footer
            activeTasksCount={activeTasksCount}
            filter={filter}
            setFilter={setFilter}
            clearCompleted={clearCompleted}
          />
        </section>
      </section>
    </>
  );
}

export default App;
