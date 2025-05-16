import React, { useState } from "react";

export const UseState1 = () => {
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
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};
