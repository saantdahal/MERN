import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const ReadSpecificStudent = () => {
  let [data, setData] = useState({});
  let params = useParams();
  let id = params.id;
  console.log(id);

  let getData = async () => {
    let result = await axios({
      url: `http://localhost:3000/student/read/${id}`,
      method: "GET",
    });
    toast(result.data.data.message);
    setData(result.data.data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h1>Student Info</h1>
      <div
        style={{ border: "1px solid black", margin: "20px", padding: "20px" }}
      >
        <div>Student Name: {data.name}</div>
        <div>Student Age: {data.age}</div>
        <div>Student Email: {data.email}</div>
        <div>Student Address: {data.address}</div>
        <div>Student ID: {data._id}</div>
      </div>
    </div>
  );
};

export default ReadSpecificStudent;
