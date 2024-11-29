import React, { useEffect, useState } from "react";
import ListItem from "./components/ListItem";

const App = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTodos = () => {
    const newTodos = todos.map((todo) => {
      return { ...todo };
    });
    newTodos.push({
      value: task,
      isCompleted: false,
      id: new Date().getTime(),
    });
    setTodos(newTodos);
    setTask("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && task.trim !== "") {
      addTodos();
    }
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => {
      const filteredTodo = prevTodos.filter((todo) => todo.id !== id);
      return filteredTodo;
    });
  };

  const handleComplete = (id) => {
    console.log("call");
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted: !todo.isCompleted };
        } else {
          return todo;
        }
      })
    });
  };

  const handleUpdate = (id, updatedValue) => {
    setTodos((prevTodo) =>
      prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, value: updatedValue };
        } else {
          return todo;
        }
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex justify-center w-full h-screen bg-slate-500 text-white p-4">
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
            disabled={task.trim() === ''}
            className={`px-2 py-2 text-xl rounded-md bg-slate-600 hover:bg-slate-700 
            disabled:bg-gray-400 disabled:cursor-not-allowed`}>
            Add
          </button>
        </div>
        <div className="w-full p-4 mt-5 bg-slate-900 flex flex-col gap-2">
          {
            todos && todos.length > 0
              ? todos.map((todo) => <ListItem
                key={todo.id}
                todo={todo}
                handleComplete={handleComplete}
                handleDelete={handleDelete}
                handleUpdate={handleUpdate}
              />
              )
              : <div className="">No Todos Availible</div>
          }
        </div>
      </div>
    </div>
  );
};

export default App;
