import React, { useEffect, useState } from 'react';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editId, setEditId] = useState(null); // Track karne ke liye kaunsa todo edit ho raha hai

  console.log(editId);

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem("task")) || [];
    setTodos(storedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todos));
  }, [todos]);

  function addOrUpdateTodo() {
    if (!input.trim()) {
      alert("Input field cannot be empty!");
      return;
    }

    if (editId) {
      // Update the existing todo
      const updatedTodos = todos.map((item) =>
        item.id === editId ? { ...item, text: input } : item
      );
      setTodos(updatedTodos);
      setEditId(null); // Reset edit mode
    } else {
      // Add a new todo
      setTodos([...todos, { id: Date.now(), text: input }]);
    }
    setInput('');
  }

  function edit(id) {
    const todoToEdit = todos.find((item) => item.id === id);
    if (todoToEdit) {
      setInput(todoToEdit.text);
      setEditId(id); // Set the ID of the todo being edited
    }
  }

  function remove(id) {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addOrUpdateTodo}>{editId ? "Update Todo" : "Add Todo"}</button>
      <div>
        {todos.map((item) => (
          <div key={item.id}>
            <p>{item.text}</p>
            <button onClick={() => edit(item.id)}>Edit</button>
            <button onClick={() => remove(item.id)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
