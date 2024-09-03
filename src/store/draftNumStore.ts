import { create } from 'zustand';

const useDraftNumStore = create((set) => ({
  draftDiaryNum: 0,
  setDraftDiaryNum: (newDraftNum) => {
    set({ draftDiaryNum: newDraftNum });
  },
}));

export default useDraftNumStore;
