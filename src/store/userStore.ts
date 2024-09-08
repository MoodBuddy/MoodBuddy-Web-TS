import { User } from "@type/User";
import { create } from "zustand";

const useUserStore = create<
  Partial<User> & { setUserInfo: (userInfo: User) => void }
>((set) => ({
  nickname: "",
  userBirth: "",
  profileComment: "",
  profileImgURL: "",
  userCurDiaryNums: 0,
  diaryEmotion: "",
  maxEmotionNum: 0,

  setUserInfo: (userInfo: User) =>
    set(() => ({
      ...userInfo,
    })),
}));

export default useUserStore;
