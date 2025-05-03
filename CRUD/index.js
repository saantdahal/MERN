import express from "express";
const app = express();
import dotenv from "dotenv";
import studentRouter from "./src/routes/studentRouter.js";
import connectDatabase from "./src/connectDB/connectionDatabase.js";

dotenv.config();
const port = process.env.PORT || 3000;
connectDatabase();
app.use(express.json());
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.use("/student", studentRouter); // Anup ley vaneko lado banako rey hai yo
