import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const formContainer = {
  maxWidth: "400px",
  margin: "30px auto",
  padding: "24px",
  border: "1px solid #ddd",
  borderRadius: "8px",
  background: "#fafafa",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

const labelStyle = {
  display: "block",
  marginBottom: "6px",
  fontWeight: 500,
};

const inputStyle = {
  width: "100%",
  padding: "8px",
  marginBottom: "16px",
  border: "1px solid #ccc",
  borderRadius: "4px",
  boxSizing: "border-box",
};

const CreateStudent = () => {
  let [name, setName] = useState("");
  let [age, setAge] = useState("");
  let [email, setEmail] = useState("");
  let [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      name: name,
      age: age,
      email: email,
      address: address,
    };

    let result = await axios({
      url: "http://localhost:3000/student/create",
      method: "POST",
      data: data,
    });
    setName("");
    setAge("");
    setEmail("");
    setAddress("");

    //console.log(result.data.message);
    toast.success(result.data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ToastContainer />
      <h1>Student Form</h1>
      <div style={formContainer}>
        <div>
          <label htmlFor="name" style={labelStyle}>
            Student Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            style={inputStyle}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>

        <br />
        <div>
          <label htmlFor="age" style={labelStyle}>
            Student Age:
          </label>
          <input
            type="number"
            id="age"
            name="age"
            style={inputStyle}
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          {" "}
          <label htmlFor="email" style={labelStyle}>
            Student Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            style={inputStyle}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="address" style={labelStyle}>
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            style={inputStyle}
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default CreateStudent;
