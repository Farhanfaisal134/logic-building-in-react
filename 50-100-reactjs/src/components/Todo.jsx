import React, { useEffect, useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const Todo = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);

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
      <div className="w-[400px] lg:w-[600px] mx-auto">
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
          {
            filteredTodos.length > 0 ? (
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
            )
          }
        </div>
      </div>
    </div>
  );
};

const ListItem = ({ todo, handleComplete, handleDelete, handleUpdate, }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [udpatedValue, setUpdatedValue] = useState(todo.value)

  function handleUpdateClick() {
    if (udpatedValue.trim() !== "") {
      handleUpdate(todo.id, udpatedValue)
      setIsEditing(false)
    }
  };

  return (
    <div
      className='bg-slate-700 px-2 py-2 flex justify-between items-center text-xl w-full rounded-md'>
      {
        todo.isCompleted ?
          (
            <p className='w-full font-bold line-through text-slate-300'>{todo.value}</p>
          ) : isEditing ? (
            <input
              value={udpatedValue}
              type="text"
              className='w-full p-2 outline-none text-black'
              onChange={(e) => setUpdatedValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUpdateClick()
                  setIsEditing(false)
                }
              }}
            />
          ) : (
            <p className='w-full font-bold'>{todo.value}</p>
          )
      }
      <div className='flex gap-1 items-center'>
        <button
          onClick={() => handleDelete(todo.id)}
          className='w-12 h-12 rounded-md p-1 bg-slate-900 flex justify-center items-center'>
          <MdDeleteForever size={30} />
        </button>
        <button
          onClick={() => handleComplete(todo.id)}
          className='w-12 h-12 rounded-md p-1 bg-slate-900 flex justify-center items-center'>
          {todo.isCompleted ? "❌" : " ✅"}
        </button>
        <button
          onClick={() => {
            if (isEditing) {
              handleUpdateClick()
            } else {
              setIsEditing(true)
            }
          }}
          disabled={udpatedValue.trim() === "" || todo.isCompleted === true}
          className='w-12 h-12 rounded-md p-1 bg-slate-900 flex justify-center items-center disabled:cursor-not-allowed disabled:bg-gray-300'>
          {isEditing ? "Upd" : <CiEdit size={30} />}
        </button>
      </div>
    </div>
  )
}

export default Todo;