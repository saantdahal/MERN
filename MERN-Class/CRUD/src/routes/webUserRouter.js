import { Router } from "express";
import { registerWebUser } from "../controller/webUserController.js";
const webUserRouter = Router();
webUserRouter.route("/register").post(registerWebUser);

export default webUserRouter;
