import { create } from 'zustand';

const useDraftListStore = create((set) => ({
  draftList: [],
  setDraftList: (newDraftList) => {
    set({ draftList: newDraftList });
  },
}));

export default useDraftListStore;
