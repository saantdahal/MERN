import mongoose from "mongoose";

const webUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  isMarried: {
    type: Boolean,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  isVerifiedEmail: {
    type: Boolean,
    required: true,
  },
});

export default webUserSchema;
