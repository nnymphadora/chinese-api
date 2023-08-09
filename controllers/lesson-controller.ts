import { Request, Response } from "express";
import lessonService from "../services/lesson-service";

const getLessonsByLevel = async (req: Request, res: Response) => {
  const levelId = req.params.id;
  const allData = await lessonService.getLessonsByLevel(parseInt(levelId));
  const data = allData.filter((lesson: any) => lesson.isRemoved !== 1);
  res.send(data);
};

const getLessonByID = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await lessonService.getLessonByID(parseInt(id));
  res.send(data);
};

const insertLesson = async (req: Request, res: Response) => {
  const data = await lessonService.insertLesson(req.body);
  res.send(data);
};

const updateLesson = async (req: Request, res: Response) => {
  const data = await lessonService.updateLesson(
    parseInt(req.params.id),
    req.body
  );
  res.send(data);
};

const toggleActiveLesson = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await lessonService.toggleActiveLesson(parseInt(id), req.body);
  res.send(data);
  console.log(req.body);
};

const softDeleteLesson = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await lessonService.softDeleteLesson(parseInt(id), req.body);
  res.send(data);
};

export default {
  getLessonsByLevel,
  insertLesson,
  updateLesson,
  getLessonByID,
  softDeleteLesson,
  toggleActiveLesson,
};
