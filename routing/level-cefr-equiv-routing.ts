import levelCefrEquivController from "../controllers/level-cefr-equiv-controller";
import express from "express";
import authMiddleware from "../middlewares/auth-middleware";

const levelCefrEquivRouter = express.Router();

levelCefrEquivRouter
  .route("/")
  .get(authMiddleware, levelCefrEquivController.getAllLevelCefrEquivs);

levelCefrEquivRouter
  .route("/:id")
  .get(authMiddleware, levelCefrEquivController.getLevelCefrEquivByID);

export default levelCefrEquivRouter;
