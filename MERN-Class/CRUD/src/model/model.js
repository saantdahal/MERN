// This is a model file that connects to the database and exports the models
// It uses mongoose to create a connection to the database and defines the schema for the models
// This is a model file that connects to the database and exports the models
// It uses mongoose to create a connection to the database and defines the schema for the models
import mongoose from "mongoose";
import studentSchema from "../schema/studentSchema.js";
import webUserSchema from "../schema/webUserSchema.js";

export const studentModel = mongoose.model("Student", studentSchema);
export const WebUserModel = mongoose.model("WebUserModel", webUserSchema);
