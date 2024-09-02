import { create } from 'zustand';

const useDiaryDateStore = create((set) => ({
  diaryDate: new Date(),
  setDiaryDate: (newDate) => set({ diaryDate: newDate }),
}));

export default useDiaryDateStore;
