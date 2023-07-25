import lessonStatusValueController from "../controllers/lesson-status-value-controller";
import express from "express";

const lessonStatusValueRouter = express.Router();

lessonStatusValueRouter
  .route("/")
  .get(lessonStatusValueController.getAllLessonStatusValues);
lessonStatusValueRouter
  .route("/:id")
  .get(lessonStatusValueController.getLessonStatusValueById);

export default lessonStatusValueRouter;
