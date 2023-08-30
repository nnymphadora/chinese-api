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
  .get(authMiddleware, levelController.getLevelByID)
  .put(levelController.updateLevel);

levelRouter.route("/:id/delete").put(levelController.softDeleteLevel);

levelRouter.route("/:id/toggle-active").put(levelController.toggleActiveLevel);

export default levelRouter;
