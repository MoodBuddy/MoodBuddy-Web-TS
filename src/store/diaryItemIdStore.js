import { create } from 'zustand';

const useDiaryItemIdStore = create((set) => ({
  diaryItemId: '',
  setDiaryItemId: (newDiaryItemId) => {
    set({ diaryItemId: newDiaryItemId });
  },
}));

export default useDiaryItemIdStore;
