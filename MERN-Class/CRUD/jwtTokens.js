import jwt from "jsonwebtoken";
import { secretKey } from "./src/utils/constant.js";
// Generate a token
let infoObj = {
  _id: "1",
};
let expiryInfo = {
  expiresIn: "1h",
};
let token = jwt.sign(infoObj, secretKey, expiryInfo);
console.log("Token: ", token);

/* // Verify a token
let token1 =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxIiwiaWF0IjoxNzQ2NDEyNjIwLCJleHAiOjE3NDY0MTYyMjB9.T-h3QIlParaXHkX2knk_HgQ1socrCVZWN3dlta9Ei2o";
let verifyToken = jwt.verify(token1, secretKey);
console.log("Verify Token: ", verifyToken); */
