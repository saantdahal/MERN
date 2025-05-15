import React from "react";

const SessionStorage = () => {
  // set session storage
  sessionStorage.setItem("name", "John Doe");
  // get session storage
  let name = sessionStorage.getItem("name");
  // Remove session storage

  //sessionStorage.removeItem("name");

  return <div>SessionStorage value is {name}</div>;
};

export default SessionStorage;
