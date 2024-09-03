import { create } from 'zustand';

const useDraftDeleteListStore = create((set) => ({
  draftDeleteList: [],
  setDraftEdit: (newDraftEdit) => {
    set({ draftEdit: newDraftEdit });
  },
}));

export default useDraftDeleteListStore;
