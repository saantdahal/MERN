import React from "react";

function LearnForm() {
  return (
    <>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input type="text" name="fullName" id="fullName" />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input type="number" name="age" id="age" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password" id="password" />
      </div>
      <div>
        <label htmlFor="isMarried">isMarried:</label>
        <input type="checkbox" name="isMarried" id="isMarried" />
      </div>
      <div>
        <label htmlFor="gender">Gender:</label>
        <input type="radio" name="gender" id="gender" />
      </div>
      <textarea name="message" id="message"></textarea>
    </>
  );
}

export default LearnForm;
