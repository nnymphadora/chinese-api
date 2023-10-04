import userService from "../services/user-service";
import { Request, Response } from "express";

const getAllUsernames = async (req: Request, res: Response) => {
  const result = await userService.getAllUsernames();
  res.send(result);
};

const getUserByUsername = async (req: Request, res: Response) => {
  const data = await userService.getUserByUsername(req.params.username);
  res.send(data);
};

const getUserById = async (req: Request, res: Response) => {
  const data = await userService.getUserById(parseInt(req.params.id));
  res.send(data);
};

const register = async (req: Request, res: Response) => {
  const result = await userService.register(req.body);
  res.send(result);
};

const login = async (req: Request, res: Response) => {
  const result = await userService.login(req.body);
  res.send(result);
};

const updateUserInfo = async (req: Request, res: Response) => {
  const data = await userService.updateUserInfo(req.body);
  res.send(data);
};

const updateUserPassword = async (req: Request, res: Response) => {
  const data = await userService.updateUserPassword(req.body);
  res.send(data);
};

const confirmPassword = async (req: Request, res: Response) => {
  const data = await userService.confirmPassword(req.body);
  res.send(data);
};

export default {
  register,
  login,
  getAllUsernames,
  getUserByUsername,
  updateUserInfo,
  getUserById,
  confirmPassword,
  updateUserPassword,
};
