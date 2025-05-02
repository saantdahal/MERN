import mongoose from "mongoose";
import studentSchema from "../schema/studentSchema";

const Student = mongoose.model("Student", studentSchema);

export { Student };
