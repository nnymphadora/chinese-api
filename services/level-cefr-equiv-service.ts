import levelCefrEquivRepo from "../repositories/level-cefr-equiv-repo";

const getAllLevelCefrEquivs = async () => {
  const data = await levelCefrEquivRepo.getAllLevelCefrEquivs();

  const result: any = [];

  data.forEach((levelCefrEquiv: any) => {
    result.push({
      id: levelCefrEquiv.id,
      name: levelCefrEquiv.name,
    });
  });
  return result;
};

const getLevelCefrEquivByID = async (id: number) => {
  const data = await levelCefrEquivRepo.getLevelCefrEquivByID(id);
  if (data && data.length > 0) {
    return {
      id: data[0].id,
      name: data[0].name,
    };
  }
};

export default {
  getAllLevelCefrEquivs,
  getLevelCefrEquivByID,
};
