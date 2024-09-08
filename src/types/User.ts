import { diaryEmotion } from "@constants/EmotionList";

export interface User {
  nickname: string;
  userBirth: string;
  profileComment: string;
  profileImgURL: string;
  userCurDiaryNums: number;
  diaryEmotion: diaryEmotion;
  maxEmotionNum: number;
}

export interface Profile {
  profileComment: string;
  alarm: boolean;
  alarmTime: string;
  phoneNumber: string;
  newProfileImg: string;
  nickname: string;
  gender: boolean;
  birthday: string;
}
