import lessonStatusValueRepo from "../repositories/lesson-status-value-repo";

const getAllLessonStatusValues = async () => {
  const data = await lessonStatusValueRepo.getAllLessonStatusValues();
  const result: any = [];
  data.forEach((status: any) => {
    result.push({
      id: status.id,
      name: status.name,
    });
  });
  return result;
};

const getLessonStatusValueById = async (id: number) => {
  const data = await lessonStatusValueRepo.getLessonStatusValueById(id);

  if (data && data.length > 0) {
    return {
      id: data[0].id,
      name: data[0].name,
    };
  }
};

export default { getAllLessonStatusValues, getLessonStatusValueById };
