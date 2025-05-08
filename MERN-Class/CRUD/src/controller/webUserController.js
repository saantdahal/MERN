import { secretKey } from "../utils/constant.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { sendEMail } from "../utils/sendMail.js";
import { WebUserModel } from "../model/model.js";

export const registerWebUser = async (req, res, next) => {
  try {
    let data = req.body;
    let hashedPassword = await bcrypt.hash(data.password, 10);

    data = {
      ...data,
      isVerifiedEmail: false,
      password: hashedPassword,
      role: "user",
    };

    let result = await WebUserModel.create(data);
    let infoObj = {
      _id: result._id,
    };
    let expiryInfo = {
      expiresIn: "1h",
    };
    let token = await jwt.sign(infoObj, secretKey, expiryInfo);
    await sendEMail({
      to: data.email,
      subject: "Account Verification",
      html: `<h1>Click the link to verify your account</h1><a href="http://localhost:3000/webUser/verify?token=${token}">http://localhost:3000/webUser/verify?token=${token}</a>`,
    });
    res.status(201).json({
      success: true,
      message: "Web User registered successfully. Please verify within 1 hour",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Verify Web User
export const verifyWebUser = async (req, res, next) => {
  try {
    let tokenString = req.headers.authorization;
    // Frontend send token like this: Bearer token
    let tokenArray = tokenString.split(" ");
    let token = tokenArray[1];
    let verifyToken = jwt.verify(token, secretKey);
    let userId = verifyToken._id;
    let result = await WebUserModel.findByIdAndUpdate(userId, {
      isVerifiedEmail: true,
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Web User verified successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Login Web User
export const loginWebUser = async (req, res, next) => {
  try {
    let email = req.body.email;
    let password = req.body.password;
    let user = await WebUserModel.findOne({
      email: email,
    });
    if (!user) {
      throw new Error("Invalid Credentials"); // User not found
    }

    if (!user.isVerifiedEmail) {
      throw new Error("Email not verified"); // Email not verified and user try to login
    }

    let isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      throw new Error("Invalid Credentials"); // Password not matched
    }

    // Generate token
    let infoObj = {
      _id: user._id,
    };
    let expiryInfo = {
      expiresIn: "365d",
    };
    let token = await jwt.sign(infoObj, secretKey, expiryInfo);
    res.status(200).json({
      success: true,
      message: "Web User logged in successfully",
      data: user,
      token: token,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// My Profile Web User
export const myProfile = async (req, res, next) => {
  try {
    let _id = req._id;
    let result = await WebUserModel.findById(_id);
    res.status(200).json({
      success: true,
      message: "Web User profile fetched successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Web User
export const updateWebUser = async (req, res, next) => {
  try {
    let _id = req._id;
    let data = req.body;
    delete data.password;
    delete data.email;

    let result = await WebUserModel.findByIdAndUpdate(_id, data, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Profile Updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Web User Password
export const updateWebUserPassword = async (req, res, next) => {
  try {
    let oldPassword = req.body.oldPassword;
    let newPassword = req.body.newPassword;
    let _id = req._id;
    let user = await WebUserModel.findById(_id);
    let isValidPassword = await bcrypt.compare(oldPassword, user.password);
    if (!isValidPassword) {
      throw new Error("Wrong Old Password");
    }
    let hashedPassword = await bcrypt.hash(newPassword, 10);
    let result = await WebUserModel.findByIdAndUpdate(
      _id,
      { password: hashedPassword },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: ("Failed to update password", error.message),
    });
  }
};

//Forgot password
export const forgotPassword = async (req, res, next) => {
  try {
    let email = req.body.email;
    let user = await WebUserModel.findOne({
      email: email,
    });
    if (!user) {
      throw new Error("User not found");
    }
    let infoObj = {
      _id: user._id,
    };
    let expiryInfo = {
      expiresIn: "10m",
    };
    let token = await jwt.sign(infoObj, secretKey, expiryInfo);
    await sendEMail({
      to: email,
      subject: "Reset Password for Web User Account",
      html: `<h1>Click the link to reset your password</h1><a href="http://localhost:3000/webuser/reset-password?token=${token}">
      <button style="background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer;">Reset Password</button>
      <br>
      token=${token}
      </a>`,
    });
    res.status(200).json({
      success: true,
      message: "Reset password link sent to your email",
      data: user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

//reset password
export const resetPassword = async (req, res, next) => {
  try {
    let hashedPassword = await bcrypt.hash(req.body.password, 10);
    let result = await WebUserModel.findByIdAndUpdate(
      req._id,
      { password: hashedPassword },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Password updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
