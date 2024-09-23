import qs from "qs";
import { get } from "./apiUtils";
import { DetailedDiary, DiaryEmotion } from "@type/Diary";
import { END_POINT } from "@constants/api";
import { SearchParams } from "@type/Search";
import { Pagination } from "@type/Page";

type FindAllResponse = Pagination<DetailedDiary>;

export const getFindAll = async (): Promise<FindAllResponse> => {
  try {
    const res = await get<FindAllResponse>(END_POINT.DIARY.GET_FIND_ALL);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const getFindAllByEmotion = async ({
  emotion,
}: DiaryEmotion): Promise<FindAllResponse> => {
  try {
    const res = await get<FindAllResponse>(
      END_POINT.DIARY.GET_FIND_ALL_BY_EMOTION(emotion)
    );
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const getFindAllByFilter = async (
  searchParams: SearchParams
): Promise<FindAllResponse> => {
  try {
    const url = END_POINT.DIARY.GET_FIND_ALL_BY_FILTER;
    const params = {
      keyWord: encodeURIComponent(searchParams.keyword),
      page: 0,
      size: 100,
      sort: "string",
      year: searchParams.year,
      month: searchParams.month,
      diarySubject: searchParams.topic,
      diaryEmotion: searchParams.diaryEmotion,
    };

    // qs 사용, params 객체를 쿼리 문자열로 변환
    const queryString = qs.stringify(params, { encode: false });

    const res = await get<FindAllResponse>(`${url}?${queryString}`);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
