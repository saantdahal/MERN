import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose.connect("mongodb://localhost:27017/backend");
  console.log("MongoDB connected successfully");
};

export default connectDatabase;
