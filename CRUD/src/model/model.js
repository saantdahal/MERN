import mongoose from "mongoose";
import studentSchema from "../schema/studentSchema.js";

export const studentModel = mongoose.model("Student", studentSchema);
