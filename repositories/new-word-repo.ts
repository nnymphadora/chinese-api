import dbConnection from "../common/db-Connection";

const getNewWordsByLesson = async (lessonId: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT new_word.* FROM new_word INNER JOIN lesson ON new_word.related_lesson_id = lesson.id WHERE lesson.id = ?",
      [lessonId]
    );
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const getNewWordsByLevel = async (levelId: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT nw.* FROM new_word nw JOIN lesson l ON nw.related_lesson_id = l.id JOIN level lvl ON l.level_id = lvl.id WHERE lvl.id = ?",
      [levelId]
    );
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const getNewWordById = async (id: number) => {
  try {
    const data = await dbConnection.query("SELECT * FROM new_word WHERE = ?", [
      id,
    ]);
    return data;
  } catch (e: any) {
    return { succes: false, msg: e.message };
  }
};

const insertNewWord = async (newWord: any) => {
  try {
    const result = await dbConnection.query(
      "INSERT INTO new_word(content,meaning,pinyin,audio_path,related_lesson_id) VALUES (?,?,?,?,?)",
      [
        newWord.content,
        newWord.meaning,
        newWord.pinyin,
        newWord.audioPath,
        newWord.relatedLessonId,
      ]
    );
    return { success: true, result };
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const updateNewWord = async (id: number, newWord: any) => {
  try {
    const result = await dbConnection.query(
      "UPDATE new_word SET content = ?, meaning = ?, pinyin = ?, audio_path = ?, related_lesson_id = ? WHERE id = ?",
      [
        newWord.meaning,
        newWord.pinyin,
        newWord.audioPath,
        newWord.relatedLessonId,
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

const deleteNewWord = async (id: number) => {
  try {
    const result1 = await dbConnection.query(
      "DELETE FROM sentence_is_example_for_word WHERE new_word_id = ?",
      [id]
    );
    const result2 = await dbConnection.query(
      "DELETE FROM new_word  WHERE id = ?",
      [id]
    );
    return { succes: true, result1, result2 };
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

export default {
  getNewWordById,
  getNewWordsByLesson,
  updateNewWord,
  insertNewWord,
  deleteNewWord,
  getNewWordsByLevel,
};
