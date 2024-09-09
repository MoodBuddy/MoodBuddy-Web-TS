import { post } from "./apiUtils";
import { BasicDiary, DiarySummaryData } from "@type/Diary";
import { BaseResponse } from "@type/Api";
import { END_POINT } from "@constants/api";

type CalendarResponse = BaseResponse<BasicDiary>;
type SummaryResponse = BaseResponse<DiarySummaryData>;

export const postCalendar = async (month: {
  calendarMonth: string;
}): Promise<CalendarResponse> => {
  try {
    const res = await post<CalendarResponse>(END_POINT.USER.POST_MONTH, month);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const postSummary = async (date: {
  calendarDay: string;
}): Promise<SummaryResponse> => {
  try {
    const res = await post<SummaryResponse>(END_POINT.USER.POST_SUMMARY, date);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
