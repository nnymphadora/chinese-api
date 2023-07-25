import { Request, Response } from "express";
import lessonService from "../services/lesson-service";

const getLessonsByLevel = async (req: Request, res: Response) => {
  const levelId = req.params.id;
  const data = await lessonService.getLessonsByLevel(parseInt(levelId));
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

export default {
  getLessonsByLevel,
  insertLesson,
  updateLesson,
};
