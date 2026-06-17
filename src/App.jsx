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

  function handleDeleteTask(id) {
    setTaskList(taskList.filter((task) => task.id !== id));
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

  return (
    <>
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList
            tasks={taskList}
            deleteTask={handleDeleteTask}
            toggleTask={toggleTask}
            startEditing={startEditing}
            saveTask={saveTask}
          />

          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;
