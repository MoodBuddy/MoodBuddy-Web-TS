import { create } from 'zustand';

const useDraftEditStore = create((set) => ({
  draftEdit: false,
  setDraftEdit: (newDraftEdit) => {
    set({ draftEdit: newDraftEdit });
  },
}));

export default useDraftEditStore;
