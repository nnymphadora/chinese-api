import { Any } from "typeorm";
import exampleSentenceRepo from "../repositories/example-sentence-repo";

const getAllExampleSentences = async () => {
  const data = await exampleSentenceRepo.getAllExampleSentences();

  const result: any = [];

  data.forEach((example: any) => {
    result.push({
      id: example.id,
      content: example.content,
      meaning: example.meaning,
      pinyin: example.pinyin,
    });
  });

  return result;
};

const getAllExampleSentencesByWord = async (wordId: number) => {
  const data = await exampleSentenceRepo.getAllExampleSentencesByWord(wordId);
  const result: any = [];

  data.forEach((example: any) => {
    result.push({
      id: example.id,
      content: example.content,
      meaning: example.meaning,
      pinyin: example.pinyin,
    });
  });
  return result;
};

const getExampleSentenceById = async (id: number) => {
  const data = await exampleSentenceRepo.getExampleSentenceById(id);

  if (data && data.length > 0) {
    return {
      id: data[0].id,
      content: data[0].content,
      meaning: data[0].meaning,
      pinyin: data[0].meaning,
    };
  }
};

const insertExampleSentence = async (exSent: any) => {
  const result = await exSent.insertExampleSentence(exSent);
  return result;
};

const updateExampleSentence = async (id: number, exSent: any) => {
  const result = await exampleSentenceRepo.updateExampleSentence(id, exSent);
  return result;
};

const deleteExampleSentence = async (id: number) => {
  const result = await exampleSentenceRepo.deleteExampleSentence(id);
  return result;
};

export default {
  getAllExampleSentencesByWord,
  getAllExampleSentences,
  getExampleSentenceById,
  updateExampleSentence,
  deleteExampleSentence,
  insertExampleSentence,
};
