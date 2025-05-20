import React from "react";
import { useEffect } from "react";

const LeranUseEffect = () => {
  let [count, setCount] = useState(0);
  // Use effect in runs in every render.
  useEffect(() => {
    console.log("Use effect is running");
  });

  // It will run in first render  only
  useEffect(() => {
    console.log("Use effect1 runs only once");
  }, []);

  // it will run in first render, from the second render it will only render when the count state variable is changed.
  useEffect(() => {
    console.log("Use effect2 runs successfully");
  }, [count]); // It will run when count changes

  //

  return <div>LeranUseEffect</div>;
};

export default LeranUseEffect;
