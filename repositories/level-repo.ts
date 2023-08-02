import dbConnection from "../common/db-Connection";

const getAllLevels = async () => {
  try {
    const data = await dbConnection.query(
      "SELECT level.*, level_difficulty.name AS difficulty_name, level_cefr_equiv.name AS cefr_equiv_name FROM level INNER JOIN level_difficulty ON level.difficulty = level_difficulty.id INNER JOIN level_cefr_equiv ON level.cefr_equiv = level_cefr_equiv.id"
    );
    return data;
  } catch (e) {
    return [];
  }
};

const getLevelByID = async (id: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT level.*, level_difficulty.name AS difficulty_name, level_cefr_equiv.name AS cefr_equiv_name FROM level INNER JOIN level_difficulty ON level.difficulty = level_difficulty.id INNER JOIN level_cefr_equiv ON level.cefr_equiv = level_cefr_equiv.id WHERE level.id = ?",
      [id]
    );
    return data;
  } catch (e) {
    return null;
  }
};

const insertLevel = async (level: any) => {
  try {
    const result = await dbConnection.query(
      `INSERT INTO level(
                    name, difficulty, description, cefr_equiv) VALUES 
                    (?, ?, ?, ?)`,
      [level.name, level.difficulty, level.description, level.cefrEquiv]
    );
    return { success: true, result };
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

//update hotel enables a soft delete through the is_active column
const updateLevel = async (id: number, level: any) => {
  try {
    const result = await dbConnection.query(
      "UPDATE level SET name  = ?, difficulty = ?, description = ?, cefr_equiv = ?, is_active = ? WHERE id = ?",
      [
        level.name,
        level.difficulty,
        level.description,
        level.cefrEquiv,
        level.isActive,
      ]
    );
    return { success: true, result };
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

//soft delete
//not in use currently
const makeLevelInactive = async (id: number) => {
  try {
    const result = await dbConnection.query(
      "UPDATE level SET is_active = ? WHERE id = ?",
      [0, id]
    );
    return { success: true, result };
  } catch (e: any) {
    return { succes: false, msg: e.message };
  }
};

const makeLevelActive = async (id: number) => {
  try {
    const result = await dbConnection.query(
      "UPDATE level SET is_active = ? WHERE id = ?",
      [1, id]
    );
    return { success: true, result };
  } catch (e: any) {
    return { succes: false, msg: e.message };
  }
};

export default {
  getAllLevels,
  getLevelByID,
  insertLevel,
  updateLevel,
};
