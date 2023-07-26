import levelDifficultyRepo from "../repositories/level-difficulty-repo";

const getAllLevelDifficulties = async () => {
  const data = await levelDifficultyRepo.getAllLevelDifficulties();

  const result: any = [];

  data.forEach((levelDifficulty: any) => {
    result.push({
      id: levelDifficulty.id,
      name: levelDifficulty.name,
    });
  });
  return result;
};

const getLevelDifficultyById = async (id: number) => {
  const data = await levelDifficultyRepo.getLevelDifficultyById(id);
  if (data && data.length > 0) {
    return {
      id: data[0].id,
      name: data[0].name,
    };
  }
};

export default {
  getAllLevelDifficulties,
  getLevelDifficultyById,
};
