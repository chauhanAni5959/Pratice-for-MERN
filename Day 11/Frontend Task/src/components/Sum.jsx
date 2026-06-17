import React from "react";

const Sum = React.memo(({number}) => {
  function Calculation() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum = sum + i;
    }
    return sum;
  }
  const total = console.log("Sum Rendered");

  return <div>Sum: {total}</div>;
});

export default Sum;
