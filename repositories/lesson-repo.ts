import dbConnection from "../common/db-Connection";

const getLessonsByLevel = async (levelId: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT lesson.*, level.name AS level FROM lesson INNER JOIN level ON lesson.level_id = level.id WHERE lesson.level_id = ?",
      [levelId]
    );
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const getLessonById = async (id: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT lesson.*, level.name AS level FROM lesson INNER JOIN level ON lesson.level_id = level.id WHERE lesson.id = ?",
      [id]
    );
    return data;
  } catch (e: any) {
    return { succes: false, msg: e.message };
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

    const insertId = result.insertId;

    return { success: true, result };
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const updateLesson = async (id: number, lesson: any) => {
  try {
    const result = await dbConnection.query(
      "UPDATE lesson SET name = ?, description = ?, level_id = ?, lesson_order_in_level = ? WHERE id = ?",
      [
        lesson.name,
        lesson.description,
        lesson.levelId,
        lesson.lessonOrderInLevel,
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

//admin can do this, makes the level visible or not visible to the regular user, and still visible to the admin
const toggleActiveLesson = async (id: number, toggleActive: any) => {
  try {
    const result = await dbConnection.query(
      "UPDATE lesson SET is_active = ? WHERE id = ?",
      [toggleActive.is_active, id]
    );
    return { success: true, result };
  } catch (e: any) {
    return { succes: false, msg: e.message };
  }
};

const softDeleteLesson = async (id: number, level: any) => {
  try {
    const result = await dbConnection.query(
      "UPDATE lesson SET is_removed = ? WHERE id = ?",
      [1, id]
    );
    return { success: true, result };
  } catch (e: any) {
    return { succes: false, msg: e.message };
  }
};

export default {
  getLessonsByLevel,
  insertLesson,
  updateLesson,
  getLessonById,
  toggleActiveLesson,
  softDeleteLesson,
};
