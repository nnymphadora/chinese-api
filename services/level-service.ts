import { Any } from "typeorm";
import levelRepo from "../repositories/level-repo";

const getAllLevels = async () => {
  const data = await levelRepo.getAllLevels();

  const result: any = [];

  data.forEach((level: any) => {
    result.push({
      id: level.id,
      name: level.name,
      difficulty: { id: level.difficulty, name: level.difficulty_name },
      description: level.description,
      cefrEquiv: { id: level.cefr_equiv, name: level.cefr_equiv_name },
      isActive: level.is_active,
      isRemoved: level.is_removed,
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
      difficulty: { id: data[0].difficulty, name: data[0].difficulty_name },
      description: data[0].description,
      cefrEquiv: { id: data[0].cefr_equiv, name: data[0].cefr_equiv_name },
      isActive: data[0].is_active,
      isRemoved: data[0].is_removed,
    };
  }
};

const insertLevel = async (level: any) => {
  const result = await levelRepo.insertLevel(level);
  console.log(level);

  return result;
};

const updateLevel = async (id: number, level: any) => {
  const result = await levelRepo.updateLevel(id, level);
  return result;
};

const toggleActiveLevel = async (id: number, toggleActive: any) => {
  const result = await levelRepo.toggleActiveLevel(id, toggleActive);

  return result;
};

const softDeleteLevel = async (id: number, level: any) => {
  const result = await levelRepo.softDeleteLevel(id, level);
  return result;
};
export default {
  getAllLevels,
  getLevelByID,
  updateLevel,
  insertLevel,
  toggleActiveLevel,
  softDeleteLevel,
};
