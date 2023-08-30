import levelDifficultyController from "../controllers/level-difficulty-controller";
import express from "express";
import authMiddleware from "../middlewares/auth-middleware";

const levelDifficultyRouter = express.Router();

levelDifficultyRouter
  .route("/")
  .get(authMiddleware, levelDifficultyController.getAllLevelDifficulties);

levelDifficultyRouter
  .route("/:id")
  .get(authMiddleware, levelDifficultyController.getLevelDifficultyById);

export default levelDifficultyRouter;
