import { create } from 'zustand';

const useDraftIdStore = create((set) => ({
  draftId: '',
  setDraftId: (newDraftId) => {
    set({ draftId: newDraftId });
  },
}));

export default useDraftIdStore;
