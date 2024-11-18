import { create } from "zustand";
type DiaryKeepImgUrlStore = {
  diaryKeepImg: string[];
  setDiaryKeepImg: (newDiaryKeepImg: string[]) => void;
};
const useDiaryKeepImgUrlStore = create<DiaryKeepImgUrlStore>((set) => ({
  diaryKeepImg: [],
  setDiaryKeepImg: (newDiaryKeepImg) => {
    set(() => {
      const updatedDiaryKeepImg = [...newDiaryKeepImg];
      console.log("update Diary Keep Images Url:", updatedDiaryKeepImg);
      return { diaryKeepImg: updatedDiaryKeepImg };
    });
  },
}));

export default useDiaryKeepImgUrlStore;
