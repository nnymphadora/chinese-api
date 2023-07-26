import dbConnection from "../common/db-Connection";

const getAllLevelCefrEquivs = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM level_cefr_equiv");
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const getLevelCefrEquivByID = async (id: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT * FROM level_cefr_equiv WHERE id = ?",
      [id]
    );
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

export default { getAllLevelCefrEquivs, getLevelCefrEquivByID };
