import express from "express";
import levelController from "../controllers/level-controller";
import authMiddleware from "../middlewares/auth-middleware";

const levelRouter = express.Router();

levelRouter
  .route("/")
  .get(authMiddleware, levelController.getAllLevels)
  .post(levelController.insertLevel);

levelRouter
  .route("/:id")
  .get(levelController.getLevelByID)
  .put(levelController.updateLevel);

export default levelRouter;
