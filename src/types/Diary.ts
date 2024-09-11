import { diaryEmotion } from "@constants/EmotionList";

export interface DetailedDiary {
  diaryId: number;
  diaryDate: string;
  diaryEmotion: diaryEmotion;
  kakaoId: number;
  diaryTitle: string;
  diaryContent: string;
  diaryWeather: "SUNNY" | "RAINY" | "SNOWY" | "CLOUDY";
  diaryStatus: "PUBLISHED" | "DRAFT";
  diarySummary: string;
  diarySubject: string;
  diaryBookMarkCheck: boolean;
  diaryImgList: string[];
  diaryFont: "MEETME" | "INTER";
  diaryFontSize: "PX24" | "PX28" | "PX30";
}

export type BasicDiary = Pick<
  DetailedDiary,
  "diaryId" | "diaryDate" | "diaryEmotion"
>;

export type DiarySummaryData = Pick<
  DetailedDiary,
  "diaryId" | "diaryTitle" | "diarySummary"
>;

export type BookMark = {
  bookmarked: boolean;
};
