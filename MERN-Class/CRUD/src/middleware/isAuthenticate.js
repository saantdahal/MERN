import jwt from "jsonwebtoken";
import { secretKey } from "../utils/constant.js";

const isAuthenticate = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];
    let verifyToken = jwt.verify(token, secretKey);
    req._id = verifyToken._id;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: "Unauthorized user",
      error: error.message,
    });
  }
};

export default isAuthenticate;
// Middleware is the
