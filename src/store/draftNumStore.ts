import { create } from "zustand";
type DraftDiaryNum = {
  draftDiaryNum: Number;
  setDraftDiaryNum: (newDraftNum: Number) => void;
};
const useDraftNumStore = create<DraftDiaryNum>((set) => ({
  draftDiaryNum: 0,
  setDraftDiaryNum: (newDraftNum) => {
    set({ draftDiaryNum: newDraftNum });
  },
}));

export default useDraftNumStore;
