import { post } from "./apiUtils";
import { BasicDiary, DiarySummaryData } from "@type/Diary";
import { END_POINT } from "@constants/api";

export const postCalendar = async (month: {
  calendarMonth: string;
}): Promise<BasicDiary> => {
  try {
    const res = await post<BasicDiary>(END_POINT.USER.POST_MONTH, month);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const postSummary = async (date: {
  calendarDay: string;
}): Promise<DiarySummaryData> => {
  try {
    const res = await post<DiarySummaryData>(END_POINT.USER.POST_SUMMARY, date);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
