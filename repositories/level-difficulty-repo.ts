import dbConnection from "../common/db-Connection";

const getAllLevelDifficulties = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM level_difficulty");
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const getLevelDifficultyById = async (id: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT * FROM level_difficulty WHERE id = ?",
      [id]
    );
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

export default { getAllLevelDifficulties, getLevelDifficultyById };
