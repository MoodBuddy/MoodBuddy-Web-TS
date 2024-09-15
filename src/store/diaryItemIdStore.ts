import { create } from "zustand";
type DiaryItemIdStore = {
  diaryItemId: string;
  setDiaryItemId: (newDiaryItemId: string) => void;
};
const useDiaryItemIdStore = create<DiaryItemIdStore>((set) => ({
  diaryItemId: "",
  setDiaryItemId: (newDiaryItemId) => {
    set({ diaryItemId: newDiaryItemId });
  },
}));

export default useDiaryItemIdStore;
