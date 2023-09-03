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
    const data = await dbConnection.query(
      "SELECT * FROM new_word WHERE id = ?",
      [id]
    );
    return data;
  } catch (e: any) {
    return { succes: false, msg: e.message };
  }
};

const insertNewWord = async (newWord: any) => {
  try {
    const result = await dbConnection.query(
      "INSERT INTO new_word(content,meaning,pinyin,related_lesson_id, ex_sent_1, ex_sent_1_mne, ex_sent_2, ex_sent_2_mne) VALUES (?,?,?,?,?,?,?,?)",
      [
        newWord.content,
        newWord.meaning,
        newWord.pinyin,
        newWord.relatedLessonId,
        newWord.exSent1,
        newWord.exSent1Mne,
        newWord.exSent2,
        newWord.exSent2Mne,
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
      "UPDATE new_word SET content = ?, meaning = ?, pinyin = ?, related_lesson_id = ?, ex_sent_1 = ?, ex_sent_1_mne = ?, ex_sent_2 = ? , ex_sent_2_mne = ? WHERE id = ?",
      [
        newWord.content,
        newWord.meaning,
        newWord.pinyin,
        newWord.relatedLessonId,
        newWord.exSent1,
        newWord.exSent1Mne,
        newWord.exSent2,
        newWord.exSent2Mne,

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
    const result = await dbConnection.query(
      "DELETE FROM new_word  WHERE id = ?",
      [id]
    );
    return { succes: true, result };
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
