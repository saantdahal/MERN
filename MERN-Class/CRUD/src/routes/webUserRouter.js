import { Router } from "express";
import {
  loginWebUser,
  registerWebUser,
  verifyWebUser,
} from "../controller/webUserController.js";
const webUserRouter = Router();
webUserRouter.route("/register").post(registerWebUser);
webUserRouter.route("/verify").post(verifyWebUser);
webUserRouter.route("/login").post(loginWebUser);

export default webUserRouter;
