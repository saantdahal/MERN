import express from "express";
const app = express();
import dotenv from "dotenv";
import studentRouter from "./src/routes/studentRouter.js";
import connectDatabase from "./src/connectDB/connectionDatabase.js";
import webUserRouter from "./src/routes/webUserRouter.js";
import fileRouter from "./src/routes/fileRouter.js";
import cors from "cors";

dotenv.config();
const port = process.env.PORT || 3000;
connectDatabase();
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.use(cors());

app.use("/student", studentRouter);
app.use("/webuser", webUserRouter);
app.use("/file", fileRouter);
