import express from "express";
import lessonController from "../controllers/lesson-controller";

const lessonRouter = express.Router();

lessonRouter.route("/").post(lessonController.insertLesson);

lessonRouter
  .route("/by-level/:id")
  .get(lessonController.getLessonsByLevel)
  .put(lessonController.updateLesson);

export default lessonRouter;
