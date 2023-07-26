import levelCefrEquivController from "../controllers/level-cefr-equiv-controller";
import express from "express";

const levelCefrEquivRouter = express.Router();

levelCefrEquivRouter
  .route("/")
  .get(levelCefrEquivController.getAllLevelCefrEquivs);

levelCefrEquivRouter
  .route("/:id")
  .get(levelCefrEquivController.getLevelCefrEquivByID);

export default levelCefrEquivRouter;
