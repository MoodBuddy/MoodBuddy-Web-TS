import { create } from 'zustand';

const useUserStore = create((set) => ({
  nickname: null,
  userBirth: null,
  profileComment: null,
  profileImgURL: null,
  userCurDiaryNums: 0,
  diaryEmotion: null,
  maxEmotionNum: 0,

  setUserInfo: (userInfo) =>
    set((state) => ({
      nickname: userInfo.nickname,
      userBirth: userInfo.userBirth,
      profileComment: userInfo.profileComment,
      profileImgURL: userInfo.profileImgURL,
      userCurDiaryNums: userInfo.userCurDiaryNums,
      diaryEmotion: userInfo.diaryEmotion,
      maxEmotionNum: userInfo.maxEmotionNum,
    })),
}));

export default useUserStore;
