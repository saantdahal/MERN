// To Connect to MongoDB using Mongoose
import mongoose from "mongoose";

const connectDatabase = () => {
  mongoose.connect(
    "mongodb+srv://curd-practice:aPbre4Pt3od1Zqx2@cluster0.tobhffg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("MongoDB connected successfully");
};
// This is a model file that connects to the database and exports the models.
// It uses mongoose to creat a connection to the database and defines the schema for the models.

export default connectDatabase;
