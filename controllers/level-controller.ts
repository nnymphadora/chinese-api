import levelService from "../services/level-service";
import { Request, Response } from "express";

const getAllLevels = async (req: Request, res: Response) => {
  const data = await levelService.getAllLevels();
  res.send(data);
};

const getLevelByID = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await levelService.getLevelByID(parseInt(id));
  res.send(data);
};

const insertLevel = async (req: Request, res: Response) => {
  const data = await levelService.insertLevel(req.body);
  res.send(data);
};

const updateLevel = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await levelService.updateLevel(parseInt(id), req.body);
  res.send(data);
};

export default {
  getAllLevels,
  getLevelByID,
  insertLevel,
  updateLevel,
};
