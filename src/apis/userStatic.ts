import {
  DiaryNumsResponse,
  EmotionNumsResponse,
  MonthStaticResponse,
  QuiddyTIResponse,
} from "@type/UserStatic";
import { get } from "./apiUtils";

export const getDiaryNums = async (
  year: string
): Promise<DiaryNumsResponse> => {
  try {
    const data = await get<DiaryNumsResponse>(
      `/api/v1/member/main/diary-nums?year=${year}`
    );
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const getEmotionNums = async (): Promise<EmotionNumsResponse> => {
  try {
    const data = await get<EmotionNumsResponse>(
      `/api/v1/member/main/emotion-nums`
    );
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const getquddyTI = async (): Promise<QuiddyTIResponse> => {
  try {
    const data = await get<QuiddyTIResponse>(`/api/v1/member/quddyTI/findAll`);
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const checkTodayDiary = async (): Promise<boolean> => {
  try {
    const data = await get<boolean>("/api/v1/member/checkTodayDiary");
    return data.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const getMonthStatic = async (
  date: string
): Promise<MonthStaticResponse> => {
  try {
    const data = await get<MonthStaticResponse>(
      `/api/v1/member/main/month-static?month=${date}`
    );
    return data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
