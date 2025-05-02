import { Router } from "express";
import {
  createStudent,
  readAllStudents,
  readSpecificStudent,
} from "../controller/studentController.js";

const studentRouter = Router();
//normal route
studentRouter.route("/create").post(createStudent);
studentRouter.route("/read").get(readAllStudents);

//dynamic route: it is always in at last
studentRouter.route("/read/:id").get(readSpecificStudent);
export default studentRouter;
