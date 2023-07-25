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

export default levelRouter;
