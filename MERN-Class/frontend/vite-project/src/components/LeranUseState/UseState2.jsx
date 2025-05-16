import React, { useState } from "react";

const UseState2 = () => {
  let [show, setShow] = useState(true);
  return (
    <div>
      UseState2
      {show === true && <img src="https://picsum.photos/200/300" alt="Image" />}
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        Show
      </button>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        Hide
      </button>
    </div>
  );
};

export default UseState2;
