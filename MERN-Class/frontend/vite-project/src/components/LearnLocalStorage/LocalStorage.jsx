import React from "react";

const LocalStorage = () => {
  // set local storage
  localStorage.setItem("name", "John Doe");

  // get local storage
  let name = localStorage.getItem("name");

  // Remove local storage
  localStorage.removeItem("name");
  return <>This is my first loacal storage value {name}</>;
};

export default LocalStorage;
// Local storage is a  meamory  for particular domain in particular browser. All data in local storage in string format, if browser is closed data will persist in local.
