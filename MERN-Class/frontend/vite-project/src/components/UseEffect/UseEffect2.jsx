import React, { useEffect, useState } from "react";

const UseEffect2 = () => {
  let [count1, setCount1] = useState(0);
  let [count2, setCount2] = useState(100);

  console.log("Component Runs Successfully");

  // We can have multiplle useEffect in a single component.If we miss array dependency [] useEffect is ru nin every render.
  useEffect(() => {
    console.log("UseEffect Runs Successfully");
  }, [count2]); // Empty array or array dependdency
  return (
    <>
      Count1 is {count1}
      Count2 is {count2}
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount1(count1 - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount2(count2 + 100);
        }}
      >
        Increment By 100
      </button>
      <button
        onClick={() => {
          setCount2(count2 - 100);
        }}
      >
        Decrement By 100
      </button>
    </>
  );
};

export default UseEffect2;
