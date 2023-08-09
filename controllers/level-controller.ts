import levelService from "../services/level-service";
import { Request, Response } from "express";

const getAllLevels = async (req: Request, res: Response) => {
  const alldata = await levelService.getAllLevels();
  const data = alldata.filter((level: any) => level.isRemoved !== 1);

  res.send(data);
};

const getLevelByID = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await levelService.getLevelByID(parseInt(id));

  res.send(data);
};

const insertLevel = async (req: Request, res: Response) => {
  console.log(req.body);
  const data = await levelService.insertLevel(req.body);
  res.send(data);
};

const updateLevel = async (req: Request, res: Response) => {
  let id = req.params.id;
  const data = await levelService.updateLevel(parseInt(id), req.body);
  res.send(data);
};

const toggleActiveLevel = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await levelService.toggleActiveLevel(parseInt(id), req.body);
  res.send(data);
  console.log(req.body);
};

const softDeleteLevel = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await levelService.softDeleteLevel(parseInt(id), req.body);
  res.send(data);
};

export default {
  getAllLevels,
  getLevelByID,
  insertLevel,
  updateLevel,
  toggleActiveLevel,
  softDeleteLevel,
};
