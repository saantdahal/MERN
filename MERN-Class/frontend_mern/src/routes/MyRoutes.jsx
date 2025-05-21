import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import CreateStudent from "../components/Student/CreateStudent";

const MyRoutes = () => {
  return (
    <>
      <style>
        {`
          body {
            font-family: Arial, sans-serif;
            background: #f5f7fa;
            margin: 0;
            padding: 0;
          }
          h1, h2, h3 {
            color: #333;
          }
          a {
            color: #1976d2;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          .container {
            max-width: 900px;
            margin: 40px auto;
            padding: 24px;
            background: #fff;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.06);
          }
        `}
      </style>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route path="About" element={<About />}></Route>
          <Route path="Contact" element={<Contact />}></Route>
          <Route path="Student" element={<Outlet />}>
            <Route path="Create" element={<CreateStudent />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
