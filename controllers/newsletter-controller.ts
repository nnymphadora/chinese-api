import { Request, Response } from "express";
import newsletterService from "../services/newsletter-service";

const getAllSubscribedEmails = async (req: Request, res: Response) => {
  const data = await newsletterService.getAllSubscribedEmails();
  res.send(data);
};

const insertSubscribedEmail = async (req: Request, res: Response) => {
  const data = await newsletterService.insertSubscribedEmail(req.body);
  res.send(data);
};

export default {
  getAllSubscribedEmails,
  insertSubscribedEmail,
};
