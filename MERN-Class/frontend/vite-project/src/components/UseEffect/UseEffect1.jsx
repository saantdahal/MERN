import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  let [count, setCount] = useState(0);
  // cleanup function is the function which is return by useEffect.
  // Cleanup function does not exenxute when first render(component mount).From the second render if useEffect execute cleanup function runts at first and then other code executes.
  useEffect(() => {
    console.log("i am useEffect");
    return () => {
      console.log("i am cleanup function");
    };
  });
  return (
    <>
      Count is {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default UseEffect1;
