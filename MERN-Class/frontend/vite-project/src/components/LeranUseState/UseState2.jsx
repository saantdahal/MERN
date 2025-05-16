import React, { useState } from "react";

const UseState2 = () => {
  let [show, setShow] = useState(true);
  return (
    <div>
      {show === true && <img src="https://picsum.photos/200/300" alt="Image" />}
      <button
        onClick={() => {
          setShow(
            //setShow(!show);
            show === true ? false : true
          );
        }}
      >
        {show === true ? "Hide" : "Show"}
      </button>
    </div>
  );
};

export default UseState2;
