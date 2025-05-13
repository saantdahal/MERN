import mongoose from "mongoose";

const webUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    minlength: [3, "Full name must be at least 3 characters long"],
    maxlength: [50, "Full name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
  dob: {
    type: Date,
    required: [true, "Date of birth is required"],
    validate: {
      validator: function (value) {
        return value <= new Date();
      },
      message: "Date of birth cannot be in the future",
    },
  },
  gender: {
    type: String,
    required: [true, "Gender is required"],
    enum: {
      values: ["Male", "Female", "Other"],
      message: "Gender must be Male, Female, or Other",
    },
  },
  isMarried: {
    type: Boolean,
    required: [true, "Marital status is required"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
    enum: {
      values: ["Admin", "User", "Guest"],
      message: "Role must be Admin, User, or Guest",
    },
  },
  isVerifiedEmail: {
    type: Boolean,
    required: [true, "Email verification status is required"],
  },
});

export default webUserSchema;
