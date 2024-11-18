import { create } from "zustand";

type DiaryDateStore = {
  diaryDate: Date;
  setDiaryDate: (newDate: Date) => void;
};
const useDiaryDateStore = create<DiaryDateStore>((set) => ({
  diaryDate: new Date(),
  setDiaryDate: (newDate) => set({ diaryDate: newDate }),
}));

export default useDiaryDateStore;
