import { create } from 'zustand';

const useUpdateDiaryStore = create((set) => ({
  updateDiary: false,
  setUpdateDiary: (newUpdateDiary) => set({ updateDiary: newUpdateDiary }),
}));

export default useUpdateDiaryStore;
