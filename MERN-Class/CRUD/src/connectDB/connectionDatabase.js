import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose.connect(
    "mongodb+srv://curd-practice:XDRaVDLWM0sJdIqp@cluster0.tobhffg.mongodb.net/"
  );
  console.log("MongoDB connected successfully");
};

export default connectDatabase;
