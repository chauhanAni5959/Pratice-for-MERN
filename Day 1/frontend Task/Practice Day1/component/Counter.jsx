import React, { useEffect, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("count");
    if (saved) {
      setCount(parseInt(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("count", count.toString());
  }, [count]);
  const decrement = () => {
    setCount((prevCount) => Math.max(0, prevCount - 1));
  };
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const reset = () => {
    setCount(0);
  };

  return (
    <div className="main">
      <h1>Count: {count}</h1>
      <div className="buttons">
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default Counter;
