import { Router } from "express";
import {
  handleMultipleFile,
  handleSingleFile,
} from "../controller/fileController.js";
import upload from "../utils/sendFile.js";

const fileRouter = Router();
fileRouter
  .route("/single-file-upload")
  .post(upload.single("document"), handleSingleFile);
fileRouter
  .route("/multiple-file-upload")
  .post(upload.array("document"), handleMultipleFile);

export default fileRouter;
