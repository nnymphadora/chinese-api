import express from "express";
import newWordController from "../controllers/new-word-controller";
import authMiddleware from "../middlewares/auth-middleware";

const newWordRouter = express.Router();

newWordRouter.route("/").post(newWordController.insertNewWords);

newWordRouter
  .route("/edit")
  .post(newWordController.updateNewWordsForEditedLesson);

newWordRouter
  .route("/:id")
  .put(newWordController.updateNewWord)
  .delete(newWordController.deleteNewWord)
  .get(authMiddleware, newWordController.getNewWordById);

newWordRouter
  .route("/by-lesson/:id")
  .get(authMiddleware, newWordController.getNewWordsByLesson);

newWordRouter
  .route("/by-level/:id")
  .get(authMiddleware, newWordController.getNewWordsByLevel);

export default newWordRouter;
