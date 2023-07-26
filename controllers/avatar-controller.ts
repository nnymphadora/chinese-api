import avatarService from "../services/avatar-service";
import { Response, Request } from "express";

const getAllAvatars = async (req: Request, res: Response) => {
  const data = await avatarService.getAllAvatars();
  res.send(data);
};

const getAvatarByID = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await avatarService.getAvatarByID(parseInt(id));
  res.send(data);
};

export default {
  getAllAvatars,
  getAvatarByID,
};
