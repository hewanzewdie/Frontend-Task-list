import React, { useState } from "react";
import Task from "./Components/Task";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Buy groceries", completed: false },
    { id: 2, title: "Read a book", completed: true },
  ]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    const title = input.trim();
    if (!title) return alert("Task cannot be empty!");

    const newTask = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      title,
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setInput("");
  };

  const checkTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const list = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "not_completed") return !task.completed;
    return true;
  });

  return (
    <div className="container mt-5">
      <h2 className="mb-4">To-Do List</h2>
      <div className="row mb-3">
        <div className="col-md-8 mb-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="form-control"
            placeholder="Task description ..."
          />
        </div>
        <div className="col-md-4">
          <button onClick={addTask} className="btn btn-primary w-100">
            Add Task
          </button>
        </div>
      </div>

      <div className="mb-3">
        <select
          className="form-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="not_completed">Not Completed</option>
        </select>
      </div>

      {list.length ? (
        list.map((task) => (
          <Task
            key={task.id}
            task={task}
            onCheck={checkTask}
            onDelete={deleteTask}
          />
        ))
      ) : (
        <p className="text-muted text-center">No tasks.</p>
      )}
    </div>
  );
}
