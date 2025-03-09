import React, { useState } from 'react'

const DragAndDrop = () => {
  const [todos, setTodos] = useState([
    { id: 1, todo: "Complete React project", status: "wip" },
    { id: 2, todo: "Read JavaScript documentation", status: "wip" },
    { id: 3, todo: "Go for a run", status: "wip" },
    { id: 4, todo: "Buy groceries", status: "wip" },
    { id: 5, todo: "Watch a tutorial", status: "wip" },
  ]);

  function onDragStart(event, id) {
    event.dataTransfer.setData("id", id)
  };

  function onDrop(event, status) {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    setTodos((prevTodos) => prevTodos.map((singleTodo) => singleTodo.id.toString() === id ? { ...singleTodo, status } : singleTodo));
  };

  const renderTodos = (status) => {
    return todos.filter((todoItem) => todoItem.status === status)
      .map((todoItem) => (
        <div
          onDragStart={(event) => onDragStart(event, todoItem.id)}
          draggable
          key={todoItem.id}
          className="px-2 md:px-4 py-2 bg-yellow-400 rounded-sm shadow-sm text-sm md:text-xl font-bold">
          {todoItem.todo}
        </div>
      ))
  };

  return (
    <div className="w-full text-center mt-10">
      <h1 className="text-2xl font-bold">Drag and Drop</h1>

      <div className="max-w-3xl w-full mx-auto grid grid-cols-2 gap-4 mt-6 p-4 h-[80vh]">
        {/* inProgress */}
        <div
          onDrop={(event) => onDrop(event, "wip")}
          onDragOver={(event) => event.preventDefault()}
          className="flex flex-col gap-4 border p-2 md:p-4">
          <h3 className="md:text-2xl font-bold">In Progress</h3>
          {renderTodos("wip")}
        </div>
        {/* completed */}
        <div
          onDrop={(event) => onDrop(event, "completed")}
          onDragOver={(event) => event.preventDefault()}
          className="flex flex-col gap-4 border p-2 md:p-4">
          <h3 className="md:text-2xl font-bold">Completed</h3>
          {renderTodos("completed")}
        </div>
      </div>
    </div>
  )
}

export default DragAndDrop