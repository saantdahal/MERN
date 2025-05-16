import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import LearnDynamicRoutes from "../components/LearnDynamicRoutes";
import LearnQueryParams from "../components/LearnQueryParams";
import Error from "../components/Error";

const Router = () => {
  return (
    /*   <Routes>
      <Route path="/" element={<Home name="Santosh" />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
      <Route path="*" element={<Error />} />
      <Route path="/:id" element={<LearnDynamicRoutes />}></Route>
      <Route path="/student" element={<LearnQueryParams />}></Route>
    </Routes> */

    // Nested Routes
    <Routes path="/" element={<Outlet />}>
      <Route index element={<Home />}></Route>
      <Route path="/user" element={<div>This is user</div>}></Route>
      <Route path="/teacher" element={<div>This is teacher</div>}></Route>
      <Route path="student" element={<Outlet />}>
        <Route index element={<div> Student Home</div>}></Route>
        <Route path="create" element={<Outlet />}>
          <Route index element={<div> Create Student</div>}></Route>
          <Route path="ram" element={<Outlet />}>
            <Route index element={<div> Ram</div>}></Route>
            <Route path=":id" element={<div>Dynamic route</div>}></Route>
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default Router;
