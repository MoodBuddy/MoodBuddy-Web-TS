import { format } from "date-fns";
import { quddies } from "@constants/QuddyList";
import { BasicDiary } from "@type/Diary";
import { diaryEmotion } from "@constants/EmotionList";

// 일기 날짜로 감정을 찾는 함수
export const getDiaryEmotion = (diaryList: BasicDiary[], date: string) => {
  const diary = diaryList.find(
    (diary) => format(new Date(diary.diaryDate), "yyyy-MM-dd") === date
  );
  return diary ? diary.diaryEmotion : undefined;
};

// 감정에 맞는 쿼디 이미지를 찾는 함수
export const getEmotionImage = (emotion: diaryEmotion) => {
  const quddy = quddies.find((quddy) => quddy.emotion === emotion);
  return quddy ? quddy.imgSrc : undefined;
};

// 날짜에서 id를 추출하는 함수
export const getDiaryId = (diaryList: BasicDiary[], date: string) => {
  const diary = diaryList.find((item) => item.diaryDate === date);
  return diary ? diary.diaryId : "";
};

export const getQuddyData = (diaryEmotion: diaryEmotion) => {
  return quddies.find((quddy) => quddy.emotion === diaryEmotion) || {};
};
