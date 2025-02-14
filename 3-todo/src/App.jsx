import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const [filteredTodos, setFilteredTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  const addTodos = () => {
    if (task.trim() !== "") {
      const newTodo = {
        value: task,
        isCompleted: false,
        id: new Date().getTime(),
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTask("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodos();
    }
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  const handleUpdate = (id, updatedValue) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, value: updatedValue } : todo
      )
    );
  };

  const filterTodos = () => {
    if (filter === "all") {
      setFilteredTodos(todos);
    } else if (filter === "completed") {
      setFilteredTodos(todos.filter((todo) => todo.isCompleted));
    };
  };

  useEffect(() => {
    filterTodos();
  }, [todos, filter]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex justify-center w-full h-screen bg-slate-500 text-white pt-4">
      <div className="w-full lg:max-w-2xl mx-auto">
        <div className="flex w-full">
          <input
            type="text"
            onKeyDown={handleKeyDown}
            value={task}
            onChange={(e) => setTask(e.target.value)}
            className="border w-full px-3 py-1 outline-none text-black"
          />
          <button
            onClick={addTodos}
            disabled={task.trim() === ""}
            className={`px-2 py-2 text-xl rounded-md bg-slate-600 hover:bg-slate-700 
            disabled:bg-gray-400 disabled:cursor-not-allowed`}
          >
            Add
          </button>
        </div>
        <div className="w-full p-4 mt-5 bg-slate-900 flex flex-col gap-2 rounded-md">
          <div className="flex justify-evenly">
            <button
              className={`px-2 py-1 rounded-sm shadow-sm ${filter === "all" ? "bg-green-500" : "bg-slate-700"
                }`}
              onClick={() => setFilter("all")}
            >
              All Todos
            </button>
            <button
              className={`px-2 py-1 rounded-sm shadow-sm ${filter === "completed" ? "bg-green-500" : "bg-slate-700"
                }`}
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>
          </div>
          {filteredTodos.length > 0 ? (
            filteredTodos.map((todo) => (
              <ListItem
                key={todo.id}
                todo={todo}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
            ))
          ) : (
            <div>No Todos Available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
