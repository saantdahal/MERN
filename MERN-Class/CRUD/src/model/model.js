import mongoose from "mongoose";
import studentSchema from "../schema/studentSchema.js";
import webUserSchema from "../schema/webUserSchema.js";

export const studentModel = mongoose.model("Student", studentSchema);
export const WebUserModel = mongoose.model("WebUserModel", webUserSchema);
