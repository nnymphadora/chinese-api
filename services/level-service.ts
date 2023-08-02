import levelRepo from "../repositories/level-repo";

const getAllLevels = async () => {
  const data = await levelRepo.getAllLevels();

  const result: any = [];

  data.forEach((level: any) => {
    result.push({
      id: level.id,
      name: level.name,
      difficulty: level.difficulty_name,
      description: level.description,
      cefrEquiv: level.cefr_equiv_name,
      isActive: level.is_active,
    });
  });
  return result;
};

const getLevelByID = async (id: number) => {
  const data = await levelRepo.getLevelByID(id);

  if (data && data.length > 0) {
    return {
      id: data[0].id,
      name: data[0].name,
      difficulty: data[0].difficulty_name,
      description: data[0].description,
      cefrEquiv: data[0].cefr_equiv_name,
      isActive: data[0].is_active,
    };
  }
};

const insertLevel = async (level: any) => {
  const result = await levelRepo.insertLevel(level);
  return result;
};

const updateLevel = async (id: number, level: any) => {
  const result = await levelRepo.updateLevel(id, level);
  return result;
};

export default {
  getAllLevels,
  getLevelByID,
  updateLevel,
  insertLevel,
};
