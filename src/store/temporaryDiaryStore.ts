import { create } from "zustand";

type TemporaryDiaryStore = {
  temporaryDiary: boolean;
  setTemporaryDiary: (newState: boolean) => void;
};
const useTemporaryDiaryStore = create<TemporaryDiaryStore>((set) => ({
  temporaryDiary: false,
  setTemporaryDiary: (newState) => set({ temporaryDiary: newState }),
}));

export default useTemporaryDiaryStore;