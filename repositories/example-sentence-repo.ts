import dbConnection from "../common/db-Connection";

const getAllExampleSentences = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM example_sentence");
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const getExampleSentenceById = async (id: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT * FROM example_sentence WHERE id = ?",
      [id]
    );

    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

//ovo prebaci u example - word -rel (izmijeniii ovaj joinnn)
const getAllExampleSentencesByWord = async (wordId: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT es.* FROM example_sentence es JOIN sentence_is_example_for_word sew ON es.id = sew.example_sentence_id JOIN new_word nw ON sew.new_word_id = nw.id WHERE nw.id = ?",
      [wordId]
    );
    return data;
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const insertExampleSentence = async (exSent: any) => {
  try {
    const result = await dbConnection.query(
      "INSERT INTO example_sentence(content,meaning,pinyin) VALUES(?,?,?)",
      [exSent.content, exSent.meaning, exSent.pinyin]
    );
    return { success: true, result };
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const updateExampleSentence = async (id: number, exSent: any) => {
  try {
    const result = await dbConnection.query(
      "UPDATE example_sentence SET content = ?, meaning = ?, pinyin = ? WHERE id = ?"[
        (exSent.content, exSent.meaning, exSent.pinyin, id)
      ]
    );
    return { success: true, result };
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

const deleteExampleSentence = async (id: number) => {
  try {
    const result1 = await dbConnection.query(
      "DELETE FROM sentence_is_example_for_word WHERE example_sentence_id = ?",
      [id]
    );
    const result2 = await dbConnection.query(
      "DELETE FROM example_sentence WHERE id = ?",
      [id]
    );
    return { success: true, result1, result2 };
  } catch (e: any) {
    return { success: false, msg: e.message };
  }
};

export default {
  getAllExampleSentences,
  getAllExampleSentencesByWord,
  getExampleSentenceById,
  insertExampleSentence,
  updateExampleSentence,
  deleteExampleSentence,
};
