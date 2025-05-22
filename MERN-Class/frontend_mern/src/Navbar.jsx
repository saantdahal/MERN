import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  let myCss = {
    marginRight: "10px",
  };
  return (
    <>
      <NavLink to={"/"} style={myCss}>
        Home
      </NavLink>
      <NavLink to={"/About"} style={myCss}>
        About
      </NavLink>
      <NavLink to={"/Contact"} style={myCss}>
        Contact
      </NavLink>

      <NavLink to={"/student/create"} style={myCss}>
        Create Student
      </NavLink>

      <NavLink to={"/student"} style={myCss}>
        Read All Students
      </NavLink>
    </>
  );
};

export default Navbar;
