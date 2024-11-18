import { get, post } from "./apiUtils";
import { END_POINT } from "@constants/api";
import {
  BaseLetter,
  CreateLetterRequest,
  Letter,
  LetterDetail,
} from "@type/Letter";

export const getLetter = async (): Promise<Letter> => {
  try {
    const res = await get<Letter>(END_POINT.LETTER.GET_LETTER);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const getLetterDetails = async (
  letterId: number
): Promise<LetterDetail> => {
  try {
    const res = await get<LetterDetail>(
      END_POINT.LETTER.GET_LETTER_DETAILS(letterId)
    );
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const postLetter = async (
  letterData: CreateLetterRequest
): Promise<BaseLetter> => {
  try {
    const res = await post<BaseLetter>(
      END_POINT.LETTER.POST_LETTER,
      letterData
    );
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const postAlarm = async (
  alarm: boolean
): Promise<BaseLetter> => {
  try {
    const res = await post<BaseLetter>(END_POINT.LETTER.POST_ALARM, alarm);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
