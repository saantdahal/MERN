// useEffect(() => {}, [dependencies])

import React, { useEffect } from "react";
// UseEffect function is a async function that will exexute once all the code gets executed.
const UseEffect = () => {
  console.log("a");
  useEffect(() => {
    console.log("b");
  });
  console.log("c");
  return <>useEffect</>;
};

export default UseEffect;
