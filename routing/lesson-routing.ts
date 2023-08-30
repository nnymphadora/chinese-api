import express from "express";
import lessonController from "../controllers/lesson-controller";
import authMiddleware from "../middlewares/auth-middleware";

const lessonRouter = express.Router();

lessonRouter.route("/").post(lessonController.insertLesson);

lessonRouter
  .route("/:id")
  .put(lessonController.updateLesson)
  .get(authMiddleware, lessonController.getLessonByID);

lessonRouter
  .route("/by-level/:id")
  .get(authMiddleware, lessonController.getLessonsByLevel);

lessonRouter.route("/:id/delete").put(lessonController.softDeleteLesson);

lessonRouter
  .route("/:id/toggle-active")
  .put(lessonController.toggleActiveLesson);

export default lessonRouter;
