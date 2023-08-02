import express from "express";
import exampleSentenceController from "../controllers/example-sentence-controller";

const exampleSentenceRouter = express.Router();

exampleSentenceRouter
  .route("/")
  .get(exampleSentenceController.getAllExampleSentences)
  .post(exampleSentenceController.insertExampleSentence);

exampleSentenceRouter
  .route("/:id")
  .get(exampleSentenceController.getExampleSentenceById)
  .put(exampleSentenceController.updateExampleSentence)
  .delete(exampleSentenceController.deleteExampleSentence);

exampleSentenceRouter
  .route("/by-word/:id")
  .get(exampleSentenceController.getAllExampleSentencesByWord);

export default exampleSentenceRouter;
