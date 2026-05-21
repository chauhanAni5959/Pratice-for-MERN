import React, { useEffect, useState } from "react";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState("");
  const [editText, setEditText] = useState("");

  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(savedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return <div></div>;
};

export default Todo;
