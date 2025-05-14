import React from "react";

const SubmitButton = () => {
  const handleClick = () => {
    return () => {
      console.log("Button clicked");
    };
  };
  return (
    <>
      <button
        name="submit"
        onClick={handleClick()}
        style={{
          cursor: "pointer",
          backgroundColor: "blue",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Submit
      </button>
    </>
  );
};

export default SubmitButton;
