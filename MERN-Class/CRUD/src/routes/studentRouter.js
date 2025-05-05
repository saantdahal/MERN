import { Router } from "express";
import {
  createStudent,
  deleteStudent,
  readAllStudents,
  readSpecificStudent,
  updateStudent,
} from "../controller/studentController.js";

const studentRouter = Router();
//normal route
studentRouter.route("/create").post(createStudent);
studentRouter.route("/read").get(readAllStudents);

//dynamic route: it is always in at last
studentRouter.route("/read/:id").get(readSpecificStudent);

// Update Student
studentRouter.route("/update/:id").patch(updateStudent);
export default studentRouter;

//Delete Student
studentRouter.route("/delete/:id").delete(deleteStudent);
