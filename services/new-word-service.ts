import newWordRepo from "../repositories/new-word-repo";
import newsletterRepo from "../repositories/newsletter-repo";

const getNewWordsByLesson = async (lessonId: number) => {
  const data = await newWordRepo.getNewWordsByLesson(lessonId);

  const result: any = [];

  data.forEach((newWord: any) => {
    result.push({
      id: newWord.id,
      content: newWord.content,
      meaning: newWord.meaning,
      pinyin: newWord.pinyin,
      relatedLessonId: newWord.related_lesson_id,
      exSent1: newWord.ex_sent_1,
      exSent1Mne: newWord.ex_sent_1_mne,
      exSent2: newWord.ex_sent_2,
      exSent2Mne: newWord.ex_sent_2_mne,
    });
  });
  return result;
};

const getNewWordsByLevel = async (levelId: number) => {
  const data = await newWordRepo.getNewWordsByLevel(levelId);
  console.log(data);

  const result: any = [];

  data.forEach((newWord: any) => {
    result.push({
      id: newWord.id,
      content: newWord.content,
      meaning: newWord.meaning,
      pinyin: newWord.pinyin,
      relatedLessonId: newWord.related_lesson_id,
      exSent1: newWord.ex_sent_1,
      exSent1Mne: newWord.ex_sent_1_mne,
      exSent2: newWord.ex_sent_2,
      exSent2Mne: newWord.ex_sent_2_mne,
    });
  });
  return result;
};

const getNewWordById = async (id: number) => {
  const data = await newWordRepo.getNewWordById(id);

  if (data && data.length > 0) {
    return {
      id: data[0].id,
      content: data[0].content,
      meaning: data[0].meaning,
      pinyin: data[0].pinyin,
      relatedLessonId: data[0].related_lesson_id,
      exSent1: data[0].ex_sent_1,
      exSent1Mne: data[0].ex_sent_1_mne,
      exSent2: data[0].ex_sent_2,
      exSent2Mne: data[0].ex_sent_2_mne,
    };
  }
};

const insertNewWord = async (newWord: any) => {
  const result = await newWordRepo.insertNewWord(newWord);
};

const insertNewWords = async (newWords: any[]) => {
  const promises = newWords.map(async (newWord) => {
    return newWordRepo.insertNewWord(newWord);
  });
  return promises;
};

const updateNewWord = async (newWord: any) => {
  const result = await newWordRepo.updateNewWord(newWord.id);

  return result;
};

const deleteNewWord = async (id: number) => {
  const result = await newWordRepo.deleteNewWord(id);
  return result;
};

const updateNewWordsForEditedLesson = async (
  newWords: any,
  lessonId: number
): Promise<any[]> => {
  const results: any[] = [];

  // Handle deletion

  const existingNewWordsForLessonInDb = await newWordRepo.getNewWordsByLesson(
    lessonId
  );

  await Promise.all(
    existingNewWordsForLessonInDb.map(async (existingNewWordInDb: any) => {
      if (
        !newWords.some((newWord: any) => newWord.id === existingNewWordInDb.id)
      ) {
        const deletedNewWord = await newWordRepo.deleteNewWord(
          existingNewWordInDb.id
        );
        results.push(deletedNewWord);
        console.log("izbrisana", existingNewWordInDb);
      }
    })
  );

  await Promise.all(
    newWords.map(async (newWord: any) => {
      if (!newWord.id) {
        const insertedNewWord = await newWordRepo.insertNewWord(newWord);
        results.push(insertedNewWord);
        console.log("dodata", newWord);
      } else {
        const existingNewWord = await newWordRepo.getNewWordById(newWord.id);
        if (existingNewWord) {
          const updatedNewWord = await newWordRepo.updateNewWord(newWord);
          results.push(updatedNewWord);
          console.log("editovana", newWord);
        }
      }
    })
  );

  return results;
};
export default {
  getNewWordsByLesson,
  getNewWordsByLevel,
  getNewWordById,
  insertNewWord,
  insertNewWords,
  updateNewWord,
  deleteNewWord,
  updateNewWordsForEditedLesson,
};
