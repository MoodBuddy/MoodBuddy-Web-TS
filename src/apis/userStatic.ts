import {
  DiaryNums,
  EmotionNums,
  MonthStatic,
  QuiddyTI,
} from "@type/UserStatic";
import { get } from "./apiUtils";
import { END_POINT } from "@constants/api";
import { BaseResponse } from "@type/Api";

type DiaryNumsResponse = BaseResponse<DiaryNums>;
type EmotionNumsResponse = BaseResponse<EmotionNums>;
type QuiddyTIResponse = BaseResponse<QuiddyTI>;
type MonthStaticResponse = BaseResponse<MonthStatic>;

// 현재까지 작성한 일기 횟수
export const getDiaryNums = async (
  year: string
): Promise<DiaryNumsResponse> => {
  try {
    const res = await get<DiaryNumsResponse>(
      END_POINT.USER.GET_DIARY_NUMS(year)
    );
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// 감정 횟수 조회
export const getEmotionNums = async (): Promise<EmotionNumsResponse> => {
  try {
    const res = await get<EmotionNumsResponse>(END_POINT.USER.GET_EMOTION_NUMS);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// 쿼디티아이 조회
export const getquddyTI = async (): Promise<QuiddyTIResponse> => {
  try {
    const res = await get<QuiddyTIResponse>(END_POINT.QUDDY_TI.GET_ALL);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// /api/v1/member/checkTodayDiary API만 받아오는 데이터형식이 다르기 때문에 따로 만들어줌
// 오늘 일기 작성 가능 여부 확인
export const checkTodayDiary = async (): Promise<{
  kakaoId: number;
  checkTodayDairy: boolean;
}> => {
  try {
    const res = await get<{
      code: number;
      data: { kakaoId: number; checkTodayDairy: boolean };
      message: string;
      status: string;
    }>(END_POINT.USER.CHECK_TODAY_DIARY);
    return res.data.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

// 월별 통계 보기
export const getMonthStatic = async (
  date: string
): Promise<MonthStaticResponse> => {
  try {
    const res = await get<MonthStaticResponse>(
      END_POINT.USER.GET_MONTH_STATIC(date)
    );
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
