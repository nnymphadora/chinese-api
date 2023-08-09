import express from "express";
import levelController from "../controllers/level-controller";

const levelRouter = express.Router();

levelRouter
  .route("/")
  .get(levelController.getAllLevels)
  .post(levelController.insertLevel);

levelRouter
  .route("/:id")
  .get(levelController.getLevelByID)
  .put(levelController.updateLevel);

levelRouter.route("/:id/delete").put(levelController.softDeleteLevel);

levelRouter.route("/:id/toggle-active").put(levelController.toggleActiveLevel);

export default levelRouter;
