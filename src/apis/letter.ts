import { get, post } from "./apiUtils";
import { BaseResponse } from "@type/Api";
import { END_POINT } from "@constants/api";
import {
  BaseLetter,
  CreateLetterRequest,
  Letter,
  LetterDetail,
} from "@type/Letter";

type LetterResponse = BaseResponse<Letter>;
type LetterDetailsResponse = BaseResponse<LetterDetail>;
type LetterPostResponse = BaseResponse<BaseLetter>;

export const getLetter = async (): Promise<LetterResponse> => {
  try {
    const res = await get<LetterResponse>(END_POINT.LETTER.GET_LETTER);
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const getLetterDetails = async (
  letterId: number
): Promise<LetterDetailsResponse> => {
  try {
    const res = await get<LetterDetailsResponse>(
      END_POINT.LETTER.GET_LETTER_DETAILS(letterId)
    );
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};

export const postLetter = async (
  letterData: CreateLetterRequest
): Promise<LetterPostResponse> => {
  try {
    const res = await post<LetterPostResponse>(
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
): Promise<LetterPostResponse> => {
  try {
    const res = await post<LetterPostResponse>(
      END_POINT.LETTER.POST_ALARM,
      alarm
    );
    return res.data;
  } catch (error) {
    throw new Error("데이터 불러오기에 실패하였습니다.");
  }
};
