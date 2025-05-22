import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const ReadAllStudents = () => {
  let [data, setData] = useState([]);
  let navigate = useNavigate();

  const getData = async () => {
    let result = await axios({
      url: "http://localhost:3000/student/read",
      method: "GET",
    });
    toast(result.data.message);
    setData(result.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <ToastContainer />
      {data.map((item, i) => {
        return (
          <div
            key={i}
            style={{
              border: "1px solid black",
              margin: "20px",
              padding: "20px",
            }}
          >
            <div>Student Name: {item.name}</div>
            <div>Student Age: {item.age}</div>
            <div>Student Email: {item.email}</div>
            <div>Student Address: {item.address}</div>
            <div>Student ID: {item._id}</div>
            <br />
            <button
              onClick={() => {
                navigate(`/student/${item._id}`);
              }}
            >
              Info
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ReadAllStudents;
