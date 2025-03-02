import React, { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Todo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [editTodo, setEditTodo] = useState(null);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const addTodos = () => {
    if (title.trim() !== "" && description.trim() !== "") {
      const newTodo = {
        title,
        description,
        isCompleted: false,
        id: new Date().getTime(),
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
      setTitle("");
      setDescription("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodos();
    }
  };

  const handleEditTodo = (todo) => {
    setEditTodo(todo)
    setTitle(todo.title)
    setDescription(todo.description)
  };

  const handleUpdate = () => {
    if (editTodo && title.trim() !== "" && description.trim() !== "") {
      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === editTodo.id
            ? { ...todo, title, description } // Corrected object syntax
            : todo
        )
      );
      setEditTodo(null);
      setTitle("");
      setDescription("");
    }
  };

  const cancelTodo = () => {
    setEditTodo(null)
    setTitle("")
    setDescription("")
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

  const filteredTodos = todos.filter(todo => {
    if (filter === "completed") return todo.isCompleted;
    return true;
  }).filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="flex justify-center w-full h-screen bg-slate-500 text-white pt-4">
      <div className="w-[400px] lg:w-[600px] mx-auto">
        <div className="flex flex-col w-full gap-2">
          <input type="text"
            placeholder="Search..."
            className="w-full p-2 mb-2 rounded text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)} />
          <input
            type="text"
            placeholder="Enter Task Title"
            onKeyDown={handleKeyDown}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border w-full px-3 py-1 outline-none text-black"
          />
          <input
            type="text"
            placeholder="Enter Task Description"
            onKeyDown={handleKeyDown}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border w-full px-3 py-1 outline-none text-black"
          />

          <div className="w-full">
            {
              editTodo
                ? (
                  <div className="flex items-center w-full gap-2">
                    <button
                      onClick={cancelTodo}
                      className="px-2 py-2 text-xl rounded-md bg-slate-600 hover:bg-slate-700 disabled:bg-gray-400 
                      disabled:cursor-not-allowed flex-1">
                      Cancel
                    </button>
                    <button
                      onClick={handleUpdate}
                      disabled={title.trim() === "" || description.trim() === ""}
                      className="px-2 py-2 text-xl rounded-md bg-slate-600 hover:bg-slate-700 disabled:bg-gray-400 
                      disabled:cursor-not-allowed flex-1">
                      Update
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={addTodos}
                    disabled={title.trim() === "" || description.trim() === ""}
                    className="px-2 py-2 text-xl rounded-md bg-slate-600 hover:bg-slate-700 disabled:bg-gray-400 
                    disabled:cursor-not-allowed w-full">
                    Add
                  </button>
                )
            }
          </div>
        </div>

        <div className="w-full p-4 mt-5 bg-slate-900 flex flex-col gap-2 rounded-md">
          <div className="flex justify-evenly">
            <button
              className={`px-2 py-1 rounded-sm shadow-sm 
                ${filter === "all" ? "bg-green-500" : "bg-slate-700"}`} onClick={() => setFilter("all")}>
              All Todos
            </button>
            <button
              className={`px-2 py-1 rounded-sm shadow-sm 
                ${filter === "completed" ? "bg-green-500" : "bg-slate-700"}`}
              onClick={() => setFilter("completed")}>
              Completed
            </button>
          </div>

          {
            filteredTodos.length > 0 ? (
              filteredTodos.map((todo) => (
                <div className="bg-slate-700 px-2 py-2 flex justify-between items-center text-xl w-full rounded-md">
                  <input
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={() => handleComplete(todo.id)}
                    className="mr-2 h-8 w-8"
                  />
                  {
                    todo.isCompleted ? (
                      <div className="w-full">
                        <p className="font-bold line-through text-slate-300">{todo.title}</p>
                        <p className="text-sm text-slate-400">{todo.description}</p>
                      </div>
                    ) : (
                      <div className="w-full text-white">
                        <p className="font-semibold">{todo.title}</p>
                        <p className="text-sm">{todo.description}</p>
                      </div>
                    )
                  }
                  <div className="flex gap-1 items-center">
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="w-12 h-12 rounded-md p-1 bg-slate-900 flex justify-center items-center">
                      <MdDeleteForever size={30} />
                    </button>
                    <button
                      className="w-12 h-12 rounded-md p-1 bg-slate-900 flex justify-center items-center"
                      onClick={() => handleEditTodo(todo)}>
                      <CiEdit />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No Todos Available</div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
