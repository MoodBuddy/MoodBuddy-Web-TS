import { create } from "zustand";
type DiaryImgStore = {
  diaryImg: string[];
  setDiaryImg: (newDiaryImg: string[]) => void;
};
const useDiaryImgStore = create<DiaryImgStore>((set) => ({
  diaryImg: [],
  setDiaryImg: (newDiaryImg) => {
    set(() => {
      const updatedDiaryImg = [...newDiaryImg];
      console.log("update Diary Images:", updatedDiaryImg);
      return { diaryImg: updatedDiaryImg };
    });
  },
}));

export default useDiaryImgStore;
