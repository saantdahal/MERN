import React from "react";
import About from "../components/about";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Router;
