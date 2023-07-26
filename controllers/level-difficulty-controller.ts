import levelDifficultyService from "../services/level-difficulty-service";
import { Request, Response } from "express";

const getAllLevelDifficulties = async (req: Request, res: Response) => {
  const data = await levelDifficultyService.getAllLevelDifficulties();
  res.send(data);
};

const getLevelDifficultyById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await levelDifficultyService.getLevelDifficultyById(
    parseInt(id)
  );
  res.send(data);
};

export default {
  getAllLevelDifficulties,
  getLevelDifficultyById,
};
