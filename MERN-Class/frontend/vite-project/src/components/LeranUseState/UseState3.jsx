import React, { useState } from "react";

const UseState3 = () => {
  const [type, setType] = useState("password");

  return (
    <div>
      <label>Password: </label>
      <input type={type} />

      <button
        onClick={() => {
          setType(type === "password" ? "text" : "password");
        }}
      >
        {type === "password" ? "Show" : "Hide"}
      </button>
    </div>
  );
};

export default UseState3;
