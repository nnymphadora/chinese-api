import newWordRepo from "../repositories/new-word-repo";

const getNewWordsByLesson = async (lessonId: number) => {
  const data = await newWordRepo.getNewWordsByLesson(lessonId);

  const result: any = [];

  data.forEach((newWord: any) => {
    result.push({
      id: newWord.id,
      content: newWord.content,
      meaning: newWord.meaning,
      pinyin: newWord.pinyin,
      audioPath: newWord.audio_path,
      relatedLessonId: newWord.related_lesson_id,
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
      audioPath: newWord.audio_path,
      relatedLessonId: newWord.related_lesson_id,
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
      audioPath: data[0].audio_path,
      relatedLessonId: data[0].related_lesson_id,
    };
  }
};

const insertNewWord = async (newWord: any) => {
  const result = await newWordRepo.insertNewWord(newWord);
  return result;
};

const updateNewWord = async (id: number, lesson: any) => {
  const result = await newWordRepo.updateNewWord(id, lesson);
  return result;
};

const deleteNewWord = async (id: number) => {
  const result = await newWordRepo.deleteNewWord(id);
  return result;
};

export default {
  getNewWordsByLesson,
  getNewWordsByLevel,
  getNewWordById,
  insertNewWord,
  updateNewWord,
  deleteNewWord,
};
