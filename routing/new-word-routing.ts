import express from "express";
import newWordController from "../controllers/new-word-controller";

const newWordRouter = express.Router();

newWordRouter.route("/").post(newWordController.insertNewWord);

newWordRouter
  .route("/:id")
  .put(newWordController.updateNewWord)
  .delete(newWordController.deleteNewWord)
  .get(newWordController.getNewWordById);

newWordRouter
  .route("/by-lesson/:id")
  .get(newWordController.getNewWordsByLesson);
newWordRouter.route("/by-level/:id").get(newWordController.getNewWordsByLevel);

export default newWordRouter;
