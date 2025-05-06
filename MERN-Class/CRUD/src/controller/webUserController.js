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
      message: "Web User registered successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
