import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    success: true,
    message: `Server is running on {http://localhost:${port}}`,
  });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
