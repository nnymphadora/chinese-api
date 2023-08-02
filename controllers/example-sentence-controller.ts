import exampleSentenceService from "../services/example-sentence-service";
import { Request, Response } from "express";

const getAllExampleSentences = async (req: Request, res: Response) => {
  const data = await exampleSentenceService.getAllExampleSentences();
  res.send(data);
};

const getAllExampleSentencesByWord = async (req: Request, res: Response) => {
  const wordId = req.params.id;
  const data = await exampleSentenceService.getAllExampleSentencesByWord(
    parseInt(wordId)
  );
  res.send(data);
};

const getExampleSentenceById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await exampleSentenceService.getExampleSentenceById(
    parseInt(id)
  );
  res.send(data);
};

const insertExampleSentence = async (req: Request, res: Response) => {
  const data = await exampleSentenceService.insertExampleSentence(req.body);
  res.send(data);
};

const updateExampleSentence = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await exampleSentenceService.updateExampleSentence(
    parseInt(id),
    req.body
  );

  res.send(data);
};

const deleteExampleSentence = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await exampleSentenceService.deleteExampleSentence(parseInt(id));
  res.send(data);
};

export default {
  getAllExampleSentences,
  getAllExampleSentencesByWord,
  getExampleSentenceById,
  updateExampleSentence,
  insertExampleSentence,
  deleteExampleSentence,
};
