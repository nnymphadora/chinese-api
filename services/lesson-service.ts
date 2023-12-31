import lessonRepo from "../repositories/lesson-repo";

const getLessonsByLevel = async (levelId: number) => {
  const data = await lessonRepo.getLessonsByLevel(levelId);

  const result: any = [];

  data.forEach((lesson: any) => {
    result.push({
      id: lesson.id,
      name: lesson.name,
      description: lesson.description,
      level: lesson.level,
      levelId: lesson.level_id,
      lessonOrderInLevel: lesson.lesson_order_in_level,
      isActive: lesson.is_active,
      isRemoved: lesson.is_removed,
    });
  });
  return result;
};

const getLessonByID = async (id: number) => {
  const data = await lessonRepo.getLessonById(id);

  if (data && data.length > 0) {
    return {
      id: data[0].id,
      name: data[0].name,
      description: data[0].description,
      level: data[0].level,
      levelId: data[0].level_id,
      lessonOrderInLevel: data[0].lesson_order_in_level,
      isActive: data[0].is_active,
      isRemoved: data[0].is_removed,
    };
  }
};

const insertLesson = async (lesson: any) => {
  const result = await lessonRepo.insertLesson(lesson);
  return result;
};

const updateLesson = async (id: number, lesson: any) => {
  const result = await lessonRepo.updateLesson(id, lesson);
  return result;
};

const toggleActiveLesson = async (id: number, toggleActive: any) => {
  const result = await lessonRepo.toggleActiveLesson(id, toggleActive);
  console.log(id, toggleActive);
  return result;
};

const softDeleteLesson = async (id: number, lesson: any) => {
  const result = await lessonRepo.softDeleteLesson(id, lesson);
  return result;
};

export default {
  getLessonsByLevel,
  insertLesson,
  updateLesson,
  getLessonByID,
  toggleActiveLesson,
  softDeleteLesson,
};
