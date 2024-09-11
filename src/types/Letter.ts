export interface BaseLetter {
  letterId: number;
  nickname: string;
  letterDate: string;
}

export interface Letter extends BaseLetter {
  userBirth: string;
  profileComment: string;
  profileImageUrl: string;
  userLetterNums: number;
  letterAlarm: boolean;
  letterResPageAnswerDTOList: Array<{
    letterId: number;
    letterDate: string;
    answerCheck: number;
  }>;
}

export interface LetterDetail extends BaseLetter {
  // ninkname, userNickname 변수명이 다름
  userNickname: string;
  letterFormat: number;
  letterWorryContent: string;
  letterAnswerContent: string;
}

export interface CreateLetterRequest {
  letterFormat: number;
  letterWorryContent: string;
  letterDate: string;
}
