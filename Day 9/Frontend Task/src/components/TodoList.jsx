import React, { useState } from "react";
import "../App.css";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "go to gym", completed: false }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setInputValue("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <main>
      <h1>To Do List</h1>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
        />
        <button onClick={handleAddTodo}>+</button>
      </div>

      <div className="todo-container">
        {todos.length === 0 ? (
          <p className="empty-message">No tasks left! Well done.</p>
        ) : (
          todos.map((todo) => (
            <div key={todo.id} className={`todo ${todo.completed ? "completed" : ""}`}>
              <p>{todo.text}</p>
              <div className="actions">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleComplete(todo.id)}
                />
                <button className="delete-btn" onClick={() => handleDeleteTodo(todo.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </main>
  );
};

export default TodoList;