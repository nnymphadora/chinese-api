import lessonStatusValueService from "../services/lesson-status-value-service";
import { Request, Response } from "express";

const getAllLessonStatusValues = async (req: Request, res: Response) => {
  const data = await lessonStatusValueService.getAllLessonStatusValues();
  res.send(data);
};

const getLessonStatusValueById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await lessonStatusValueService.getLessonStatusValueById(
    parseInt(id)
  );
  res.send(data);
};

export default {
  getAllLessonStatusValues,
  getLessonStatusValueById,
};
