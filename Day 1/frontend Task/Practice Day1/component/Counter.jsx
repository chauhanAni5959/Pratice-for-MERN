import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState();
  return <div>
    <p>{count}</p>
    
  </div>;
};

export default Counter;
