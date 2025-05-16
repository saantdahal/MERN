import React from "react";
import { Link } from "react-router-dom";

const NavLink = () => {
  let cssStyle = {
    marginRight: "10px",
  };
  return (
    <>
      {/*    <Link to="/about" style={cssStyle}>
        About
      </Link>
      <Link to="/contact" style={cssStyle}>
        Contact
      </Link> */}
      <Link to="/" style={cssStyle}>
        Home
      </Link>
    </>
  );
};

export default NavLink;
