import { Router } from "express";
import {
  forgotPassword,
  loginWebUser,
  myProfile,
  registerWebUser,
  resetPassword,
  updateWebUser,
  updateWebUserPassword,
  verifyWebUser,
} from "../controller/webUserController.js";
import isAuthenticate from "../middleware/isAuthenticate.js";
const webUserRouter = Router();
webUserRouter.route("/register").post(registerWebUser);
webUserRouter.route("/verify").post(verifyWebUser);
webUserRouter.route("/login").post(loginWebUser);
webUserRouter.route("/my-profile").get(isAuthenticate, myProfile);
webUserRouter.route("/update-profile").patch(isAuthenticate, updateWebUser);
webUserRouter
  .route("/update-password")
  .patch(isAuthenticate, updateWebUserPassword);

webUserRouter.route("/forgot-password").post(forgotPassword);
webUserRouter.route("/reset-password").patch(isAuthenticate, resetPassword);

export default webUserRouter;
