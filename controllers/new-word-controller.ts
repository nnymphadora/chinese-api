import { Any } from "typeorm";
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

const insertNewWords = async (req: Request, res: Response) => {
  const data = await newWordService.insertNewWords(req.body);
  res.send(data);
};

const updateNewWord = async (req: Request, res: Response) => {
  const data = await newWordService.updateNewWord(req.body);
  res.send(data);
};

const deleteNewWord = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await newWordService.deleteNewWord(parseInt(id));
  res.send(data);
};

const updateNewWordsForEditedLesson = async (req: Request, res: Response) => {
  const newWords = req.body.newWords;
  const lessonId = req.body.lessonId;
  const data = await newWordService.updateNewWordsForEditedLesson(
    newWords,
    lessonId
  );
  res.send(data);
};

export default {
  getNewWordById,
  getNewWordsByLesson,
  updateNewWord,
  insertNewWords,
  deleteNewWord,
  getNewWordsByLevel,
  updateNewWordsForEditedLesson,
};
