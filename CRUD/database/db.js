import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose.connect(process.env.BASE_URL).then((res) => {
    console.log("MongoDB connected successfully");
  });
};
