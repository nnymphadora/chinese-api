import userService from "../services/user-service";
import { Request, Response } from "express";

const getAllUsernames = async (req: Request, res: Response) => {
  const result = await userService.getAllUsernames();
  res.send(result);
};

const register = async (req: Request, res: Response) => {
  const result = await userService.register(req.body);
  res.send(result);
};

const login = async (req: Request, res: Response) => {
  const result = await userService.login(req.body);
  res.send(result);
};

export default { register, login, getAllUsernames };
