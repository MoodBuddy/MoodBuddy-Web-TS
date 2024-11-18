import { diaryEmotion } from "@constants/EmotionList";
import { Topic } from "./Diary";

export interface SearchParams {
  keyword: string;
  year: number | null;
  month: number | null;
  topic: Topic | null;
  diaryEmotion: diaryEmotion | null;
}
