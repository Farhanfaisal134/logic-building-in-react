import React, { useEffect, useState } from 'react';

const App = () => {
  const [loading, setLoading] = useState(false);
  const [todos, setTodos] = useState([]);

  const fetchListOfTodos = async () => {
    setLoading(true);
    try {
      const apiResponse = await fetch("https://dummyjson.com/todos?limit=5&skip=0");
      const result = await apiResponse.json();
      if (result?.todos?.length > 0) {
        const updatedTodos = result.todos.map((todoItem) => ({
          ...todoItem,
          status: "wip",
        }));
        setTodos(updatedTodos);
      }
    } catch (error) {
      console.error("Error fetching todos:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchListOfTodos();
  }, []);

  const onDragStart = (event, id) => {
    event.dataTransfer.setData("id", id);
  };

  const onDrop = (event, status) => {
    event.preventDefault();
    const id = event.dataTransfer.getData("id");
    setTodos((prevTodos) =>
      prevTodos.map((todoItem) =>
        todoItem.id.toString() === id ? { ...todoItem, status } : todoItem
      )
    );
  };

  const renderTodos = (status) => {
    return todos
      .filter((todoItem) => todoItem.status === status)
      .map((todoItem) => (
        <div
          onDragStart={(event) => onDragStart(event, todoItem.id)}
          draggable
          key={todoItem.id}
          className="px-2 md:px-4 py-2 bg-yellow-400 rounded-sm shadow-sm text-sm md:text-xl font-bold"
        >
          {todoItem.todo}
        </div>
      ));
  };

  return (
    <div className="w-full text-center mt-10">
      <h1 className="text-2xl font-bold">Drag and Drop</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="max-w-3xl mx-auto grid grid-cols-2 gap-4 mt-6 p-4 h-[80vh]">
          {/* inProgress */}
          <div
            onDrop={(event) => onDrop(event, "wip")}
            onDragOver={(event) => event.preventDefault()}
            className="flex flex-col gap-4 border p-2 md:p-4"
          >
            <h3 className="md:text-2xl font-bold">In Progress</h3>
            {renderTodos("wip")}
          </div>
          {/* completed */}
          <div
            onDrop={(event) => onDrop(event, "completed")}
            onDragOver={(event) => event.preventDefault()}
            className="flex flex-col gap-4 border p-2 md:p-4"
          >
            <h3 className="md:text-2xl font-bold">Completed</h3>
            {renderTodos("completed")}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
