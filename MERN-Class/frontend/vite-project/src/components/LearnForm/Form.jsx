import React, { useState } from "react";

const Form = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [dob, setDob] = useState("");
  let [isMarried, setIsMarried] = useState(false);
  let [gender, setGender] = useState("");

  const Genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    let data = {
      fullName: fullName,
      email: email,
      password: password,
      dob: dob,
      isMarried: isMarried,
      gender: gender,
    };
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit}>
      Form
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          name="fullName"
          id="fullName"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="dob">Date of Birth:</label>
        <input
          type="date"
          name="dob"
          id="dob"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
      </div>
      <div>
        <label htmlFor="isMarried">isMarried:</label>
        <input
          type="checkbox"
          name="isMarried"
          id="isMarried"
          value={isMarried}
          checked={isMarried === true}
          onChange={(e) => {
            setIsMarried(e.target.checked);
          }}
        />
      </div>
      <div>
        <label>Gender:</label>
        {Genders.map((value, index) => {
          return (
            <span key={index}>
              <label htmlFor={value.label}>{value.label}</label>
              <input
                type="radio"
                name={value.value}
                id={value.value}
                checked={gender === value.value}
                value={value.value}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
              />
            </span>
          );
        })}
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
