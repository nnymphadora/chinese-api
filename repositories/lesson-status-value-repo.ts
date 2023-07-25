import dbConnection from "../common/db-Connection";

const getAllLessonStatusValues = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM lesson_status_value");
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const getLessonStatusValueById = async (id: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT * FROM lesson_status_value WHERE id = ?",
      [id]
    );
    return data;
  } catch (e: any) {
    return { succes: false, msg: e.message };
  }
};

export default {
  getAllLessonStatusValues,
  getLessonStatusValueById,
};
