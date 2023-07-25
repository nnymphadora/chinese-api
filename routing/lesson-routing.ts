import express from "express";
import lessonController from "../controllers/lesson-controller";

const lessonRouter = express.Router();

lessonRouter.route("/").post(lessonController.insertLesson);

lessonRouter
  .route("/:id")
  .put(lessonController.updateLesson)
  .get(lessonController.getLessonByID);

lessonRouter.route("/by-level/:id").get(lessonController.getLessonsByLevel);

export default lessonRouter;
