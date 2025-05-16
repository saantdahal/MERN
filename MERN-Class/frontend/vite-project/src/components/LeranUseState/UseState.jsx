import React, { useState } from "react";

const UseState = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      Count value is {count}
      <button
        onClick={() => {
          setCount(count++);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count--);
        }}
      >
        Decrement
      </button>
    </div>
  );
};

export default UseState;
