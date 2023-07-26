import levelDifficultyController from "../controllers/level-difficulty-controller";
import express from "express";

const levelDifficultyRouter = express.Router();

levelDifficultyRouter
  .route("/")
  .get(levelDifficultyController.getAllLevelDifficulties);

levelDifficultyRouter
  .route("/:id")
  .get(levelDifficultyController.getLevelDifficultyById);

export default levelDifficultyRouter;
