import dbConnection from "../common/db-Connection";

const getLessonsByLevel = async (levelId: number) => {
  try {
    const result = await dbConnection.query(
      "SELECT * FROM lesson WHERE level_id = ?",
      [levelId]
    );
    return result;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const insertLesson = async (lesson: any) => {
  try {
    const result = await dbConnection.query(
      "INSERT INTO lesson(name, description, level_id, lesson_order_in_level) VALUES (?,?,?,?)",
      [
        lesson.name,
        lesson.description,
        lesson.levelId,
        lesson.lessonOrderInLevel,
      ]
    );
    return { success: true, result };
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const updateLesson = async (id: number, lesson: any) => {
  try {
    const result = await dbConnection.query(
      "UPDATE lesson SET name = ?, description = ?, level_id = ?, lesson_order_in_level = ?, is_active = ? WHERE id = ?",
      [
        lesson.name,
        lesson.description,
        lesson.levelId,
        lesson.lessonOrderInLevel,
        lesson.isActive,
        id,
      ]
    );
    return { success: true, result };
  } catch (e: any) {
    return {
      success: false,
      msg: e.message,
    };
  }
};

export default { getLessonsByLevel, insertLesson, updateLesson };
