import levelCefrEquivService from "../services/level-cefr-equiv-service";
import { Response, Request } from "express";

const getAllLevelCefrEquivs = async (req: Request, res: Response) => {
  const data = await levelCefrEquivService.getAllLevelCefrEquivs();
  res.send(data);
};

const getLevelCefrEquivByID = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await levelCefrEquivService.getLevelCefrEquivByID(parseInt(id));
  res.send(data);
};

export default {
  getAllLevelCefrEquivs,
  getLevelCefrEquivByID,
};
