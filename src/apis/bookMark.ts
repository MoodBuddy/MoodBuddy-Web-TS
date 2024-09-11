import { END_POINT } from "@constants/api";
import { get, post } from "./apiUtils";
import { BaseResponse } from "@type/Api";
import { BookMark, DetailedDiary } from "@type/Diary";

type BookMarkResponse = BaseResponse<DetailedDiary>;
type BookMarkToggleResponse = BaseResponse<BookMark>;

export const getBookMarkFindAll = async (): Promise<BookMarkResponse> => {
  try {
    const res = await get<DetailedDiary>(END_POINT.BOOKMARK.GET_ALL);
    return res.data.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const bookMarkToggle = async (
  diaryId: number
): Promise<BookMarkToggleResponse> => {
  try {
    const res = await post<BookMark>(
      END_POINT.BOOKMARK.POST_TOGGLE(diaryId),
      diaryId
    );
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
