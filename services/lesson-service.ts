import lessonRepo from "../repositories/lesson-repo";

const getLessonsByLevel = async (levelId: number) => {
  const data = await lessonRepo.getLessonsByLevel(levelId);

  const result: any = [];

  data.forEach((lesson: any) => {
    result.push({
      id: lesson.id,
      name: lesson.name,
      description: lesson.description,
      levelId: lesson.level_id,
      lessonOrderInLevel: lesson.lesson_order_in_level,
      is_active: lesson.is_active,
    });
  });
  return result;
};

const insertLesson = async (lesson: any) => {
  const result = await lessonRepo.insertLesson(lesson);
  return result;
};

const updateLesson = async (id: number, lesson: any) => {
  const result = await lessonRepo.updateLesson(id, lesson);
  return result;
};

export default {
  getLessonsByLevel,
  insertLesson,
  updateLesson,
};
