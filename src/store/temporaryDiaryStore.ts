import { create } from "zustand";

interface TemporaryDiaryState {
  temporaryDiary: boolean;
  setTemporaryDiary: (newState: boolean) => void;
}

const useTemporaryDiaryStore = create<TemporaryDiaryState>((set) => ({
  temporaryDiary: false,
  setTemporaryDiary: (newState: boolean) => set({ temporaryDiary: newState }),
}));

export default useTemporaryDiaryStore;
