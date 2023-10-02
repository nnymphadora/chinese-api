import express from "express";
import userController from "../controllers/user-controller";

const userRouter = express.Router();

userRouter.route("/register").post(userController.register);
userRouter.route("/login").post(userController.login);
userRouter.route("/users").get(userController.getAllUsernames);
userRouter.route("/user/:username").get(userController.getUserByUsername);
userRouter.route("/user/:id").get(userController.getUserById);
userRouter.route("/user/update/:id").put(userController.updateUserInfo);

export default userRouter;
