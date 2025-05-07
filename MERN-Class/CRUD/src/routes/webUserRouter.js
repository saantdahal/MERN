import { Router } from "express";
import {
  loginWebUser,
  myProfile,
  registerWebUser,
  verifyWebUser,
} from "../controller/webUserController.js";
import isAuthenticate from "../middleware/isAuthenticate.js";
const webUserRouter = Router();
webUserRouter.route("/register").post(registerWebUser);
webUserRouter.route("/verify").post(verifyWebUser);
webUserRouter.route("/login").post(loginWebUser);
webUserRouter.route("/my-profile").get(isAuthenticate, myProfile);

export default webUserRouter;
