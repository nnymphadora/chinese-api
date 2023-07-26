import avatarController from "../controllers/avatar-controller";
import express from "express";

const avatarRouter = express.Router();

avatarRouter.route("/").get(avatarController.getAllAvatars);
avatarRouter.route("/:id").get(avatarController.getAvatarByID);

export default avatarRouter;
