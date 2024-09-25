import {
  DiaryNums,
  EmotionNums,
  MonthStatic,
  QuiddyTI,
} from "@type/UserStatic";
import { get } from "./apiUtils";
import { END_POINT } from "@constants/api";
import { UserDiary } from "@type/User";

// 현재까지 작성한 일기 횟수
export const getDiaryNums = async (year: string): Promise<DiaryNums> => {
  try {
    const res = await get<DiaryNums>(END_POINT.USER.GET_DIARY_NUMS(year));
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// 감정 횟수 조회
export const getEmotionNums = async (): Promise<EmotionNums> => {
  try {
    const res = await get<EmotionNums>(END_POINT.USER.GET_EMOTION_NUMS);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// 쿼디티아이 조회
export const getquddyTI = async (): Promise<QuiddyTI> => {
  try {
    const res = await get<QuiddyTI>(END_POINT.QUDDY_TI.GET_ALL);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// 오늘 일기 작성 가능 여부 확인
export const checkTodayDiary = async (): Promise<UserDiary> => {
  try {
    const res = await get<UserDiary>(END_POINT.USER.CHECK_TODAY_DIARY);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// 월별 통계 보기
export const getMonthStatic = async (date: string): Promise<MonthStatic> => {
  try {
    const res = await get<MonthStatic>(END_POINT.USER.GET_MONTH_STATIC(date));
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
