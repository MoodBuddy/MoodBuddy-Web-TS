import { diaryEmotion } from "@constants/EmotionList";

interface DiaryNums {
  month: string;
  nums: number;
}

type DiaryNumsResponse = DiaryNums[];

interface EmotionNumEntry {
  diaryEmotion: diaryEmotion;
  nums: number;
}

type EmotionNumsResponse = EmotionNumEntry[];

// 임시로 OTHER_TYPE으로 설정
type QuiddyTIType = "PEH" | "OTHER_TYPE";

interface QuiddyTIResponse {
  happinessCount: number;
  angerCount: number;
  disgustCount: number;
  fearCount: number;
  neutralCount: number;
  sadnessCount: number;
  surpriseCount: number;
  dailyCount: number;
  growthCount: number;
  emotionCount: number;
  travelCount: number;
  quddyTIType: QuiddyTIType;
}

interface EmotionStatic {
  diaryEmotion: diaryEmotion;
  nums: number;
}

interface MonthStaticResponse {
  emotionStaticDtoList: EmotionStatic[];
  monthComment: string;
  commentCheck: boolean;
}

export type {
  DiaryNumsResponse,
  EmotionNumsResponse,
  QuiddyTIResponse,
  MonthStaticResponse,
};
