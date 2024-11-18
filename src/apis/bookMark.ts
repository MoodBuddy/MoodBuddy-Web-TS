import { END_POINT } from "@constants/api";
import { get, post } from "./apiUtils";
import { BookMark, DetailedDiary } from "@type/Diary";

export const getBookMarkFindAll = async (): Promise<DetailedDiary> => {
  try {
    const res = await get<DetailedDiary>(END_POINT.BOOKMARK.GET_ALL);
    console.log(res);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const bookMarkToggle = async (diaryId: number): Promise<BookMark> => {
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
