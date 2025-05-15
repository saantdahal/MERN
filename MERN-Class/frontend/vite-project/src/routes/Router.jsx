import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import LearnDynamicRoutes from "../components/LearnDynamicRoutes";
import LearnQueryParams from "../components/LearnQueryParams";
import Error from "../components/Error";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home name="Santosh" />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      {/* <Route path="/:id" element={<LearnDynamicRoutes />}></Route> */}
      <Route path="/student" element={<LearnQueryParams />}></Route>
    </Routes>
  );
};

export default Router;
