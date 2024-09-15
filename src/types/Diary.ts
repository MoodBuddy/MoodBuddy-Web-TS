import { diaryEmotion } from "@constants/EmotionList";

export interface DetailedDiary {
  diaryId: number;
  diaryDate: string;
  diaryEmotion: diaryEmotion;
  kakaoId: number;
  diaryTitle: string;
  diaryContent: string;
  diaryWeather: "CLEAR" | "RAIN" | "SNOW" | "CLOUDY";
  diaryStatus: "PUBLISHED" | "DRAFT";
  diarySummary: string;
  diarySubject: string;
  diaryBookMarkCheck: boolean;
  diaryImgList: string[];
  diaryFont: "MEETME" | "INTER";
  diaryFontSize: "PX24" | "PX28" | "PX30";
}
export type DiaryEmotion = {
  emotion:
    | "HAPPINESS"
    | "ANGER"
    | "DISGUST"
    | "FEAR"
    | "NEUTRAL"
    | "SADNESS"
    | "SURPRISE";
};

export type Topic = "DAILY" | "GROWTH" | "EMOTION" | "TRAVEL";

export type BasicDiary = Pick<
  DetailedDiary,
  "diaryId" | "diaryDate" | "diaryEmotion"
>;

export type DiarySummaryData = Pick<
  DetailedDiary,
  "diaryId" | "diaryTitle" | "diarySummary"
>;

export type DiaryListData = Pick<
  DetailedDiary,
  | "diaryId"
  | "diaryDate"
  | "diaryTitle"
  | "diarySummary"
  | "diaryImgList"
  | "diaryWeather"
>;

export type BookMark = {
  bookmarked: boolean;
};
