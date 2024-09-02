import { create } from 'zustand';

const useTemporaryDiaryStore = create((set) => ({
  temporaryDiary: false,
  setTemporaryDiary: (newState) => set({ temporaryDiary: newState }),
}));

export default useTemporaryDiaryStore;
