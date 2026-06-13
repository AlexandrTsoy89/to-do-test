import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { NewTaskForm } from "./components/NewTaskForm";
import { TaskList } from "./components/TaskList";
import { Footer } from "./components/Footer";

function App() {
  const tasks = [
    {
      id: 1,
      description: "Completed task",
      completed: true,
      created: new Date(),
    },
    {
      id: 2,
      description: "Editing task",
      completed: false,
      created: new Date(),
    },
    {
      id: 3,
      description: "Active task",
      completed: false,
      created: new Date(),
    },
  ];

  return (
    <>
      <section className="todoapp">
        <NewTaskForm />
        <section className="main">
          <TaskList tasks={tasks} />
          <Footer />
        </section>
      </section>
    </>
  );
}

export default App;