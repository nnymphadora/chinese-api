import newWordService from "../services/new-word-service";
import { Request, Response } from "express";

const getNewWordsByLesson = async (req: Request, res: Response) => {
  const lessonId = req.params.id;
  const data = await newWordService.getNewWordsByLesson(parseInt(lessonId));
  res.send(data);
};

const getNewWordsByLevel = async (req: Request, res: Response) => {
  const levelId = req.params.id;
  const data = await newWordService.getNewWordsByLevel(parseInt(levelId));
  res.send(data);
};

const getNewWordById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await newWordService.getNewWordById(parseInt(id));
  res.send(data);
};

const insertNewWord = async (req: Request, res: Response) => {
  const data = await newWordService.insertNewWord(req.body);
  res.send(data);
};

const updateNewWord = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await newWordService.updateNewWord(parseInt(id), req.body);
  res.send(data);
};

const deleteNewWord = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await newWordService.deleteNewWord(parseInt(id));
  res.send(data);
};

export default {
  getNewWordById,
  getNewWordsByLesson,
  updateNewWord,
  insertNewWord,
  deleteNewWord,
  getNewWordsByLevel,
};
