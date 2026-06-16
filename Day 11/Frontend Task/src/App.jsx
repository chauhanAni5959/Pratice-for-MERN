import React, { useState } from "react";
import Sum from "./components/Sum";
import "./App.css";
function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(1000);

  return (
    <div>
      <h1>Count is: {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me
      </button>
      <h1>Number is: {number}</h1>
      <button
        onClick={() => {
          setCount(number + 100);
        }}
      > Click me </button>

      <Sum />
    </div>
  );
}

export default App;
