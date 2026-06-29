import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>The count of : {count}</h1>
      {/* Option 1: Passing the next value directly */}
      <button onClick={() => setCount(count + 1)}>click me</button>
      
      {/* Option 2: Using a functional update (Recommended for safety) */}
      <button onClick={() => setCount(prevCount => prevCount - 1)}>click me</button>
    </>
  );
};

export default Counter;